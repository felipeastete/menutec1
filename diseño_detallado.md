3.1 Diagrama de clases (texto / PlantUML)
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡Nota: El diagrama PlantUML anterior puede pegarse en un generador PlantUML para obtener la imagen. También se incluye una versión en lenguaje natural abajo.
3.2 Descripción de relaciones y responsabilidades
MenuFactory crea instancias concretas de Plato según tipo.
Plato es la clase base que contiene atributos comunes: id, nombre, precio y lista de opiniones.
DatabaseConnection implementa Singleton para gestionar la conexión.
ObservablePlato (composición con Plato) mantiene una lista de observers que se notificarán cuando cambien las opiniones/valoraciones.
Usuario puede registrarse, iniciar sesión, opinar y clasificar platos.
Administrador tiene permisos para subir y editar el menú.

4. Fragmentos de código representativos (Python)
A continuación se muestran implementaciones claras y comentadas para los patrones: Singleton, Factory y Observer.
4.1 Singleton — Conexión a la base de datos
# database.py
import sqlite3
from threading import Lock

class DatabaseConnection:
_instance = None
_lock = Lock()

def __new__(cls, db_path='menutec.db'):
if not cls._instance:
with cls._lock:
if not cls._instance:
cls._instance = super().__new__(cls)
cls._instance._init(db_path)
return cls._instance

def _init(self, db_path):
self.connection = sqlite3.connect(db_path, check_same_thread=False)
self.cursor = self.connection.cursor()

def query(self, sql, params=()):
self.cursor.execute(sql, params)
self.connection.commit()
return self.cursor
Comentario: Uso de Lock para seguridad en entornos multihilo y evitar múltiples instancias.
4.2 Factory — Creación de platos
# menu_factory.py
from abc import ABC, abstractmethod

class Plato(ABC):
def __init__(self, id_, nombre, precio):
self.id = id_
self.nombre = nombre
self.precio = precio
self.opiniones = []

@abstractmethod
def tipo(self):
pass

def agregar_opinion(self, opinion):
self.opiniones.append(opinion)

def promedio(self):
if not self.opiniones:
return None
return sum(o['nota'] for o in self.opiniones) / len(self.opiniones)

class PlatoNormal(Plato):
def tipo(self):
return 'normal'

class PlatoVegetariano(Plato):
def tipo(self):
return 'vegetariano'

class PlatoSinGluten(Plato):
def tipo(self):
return 'sin_gluten'

class MenuFactory:
@staticmethod
def crear_plato(tipo, id_, nombre, precio):
if tipo == 'normal':
return PlatoNormal(id_, nombre, precio)
if tipo == 'vegetariano':
return PlatoVegetariano(id_, nombre, precio)
if tipo == 'sin_gluten':
return PlatoSinGluten(id_, nombre, precio)
raise ValueError('Tipo de plato no soportado')
4.3 Observer — Notificar cambios de opiniones
# observer.py
class Observer:
def update(self, subject):
raise NotImplementedError

class ObservablePlato:
def __init__(self):
self._observers = []

def attach(self, obs: Observer):
self._observers.append(obs)

def detach(self, obs: Observer):
self._observers.remove(obs)

def notify(self):
for obs in self._observers:
obs.update(self)

# Ejemplo de uso en Plato
class PlatoObservable(Plato, ObservablePlato):
def __init__(self, id_, nombre, precio):
Plato.__init__(self, id_, nombre, precio)
ObservablePlato.__init__(self)

def agregar_opinion(self, opinion):
super().agregar_opinion(opinion)
self.notify()

# Observer concreto que recalcula y almacena promedio
class PromedioObserver(Observer):
def update(self, subject: Plato):
prom = subject.promedio()
# Aquí se podría persistir el promedio en la BD o actualizar la vista
print(f"Nuevo promedio para {subject.nombre}: {prom}")
Comentario: Cuando un Usuario agrega una opinión, PlatoObservable.agregar_opinion notifica a los observers, que pueden actualizar la interfaz de usuario, guardar métricas o recalcular estadísticas.
