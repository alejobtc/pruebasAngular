[[_TOC_]]

# **Lineamientos y Estándares Angular**

## Introducción

Desde el área de ingeniería de software estamos en constante investigación y análisis de diferentes tecnologías, para que los proyectos cuenten con todas las herramientas de última tecnología, en este caso vamos a hablar sobre estandares y buenas practicas para aplicaciones Angular.

Hablaremos de las recomendaciones de estructurar y organizar el proyecto. Estas recomendaciones estan basadas en feedback del equipo de ingenieria y tips que he recibido de los equipos fullstack, artículos y conferencias. 

Si bien muchos puntos de este artículo siguen siendo válidos, algunos pueden estar desactualizados con el tiempo y nos gustaría que nos reportara estos temas.

## Palabras Claves

**Palabra**

> _Significado_

<br/>
<br/>


# Principios Básicos

Usualmente la estructura de archivos que tengas en tu proyecto influirá en tus tiempos de desarrollo. ¿Cuanto tiempo te toma encontrar un archivo? Si la respuesta es “mas de 5 segundos”, estamos mal. Existe un principio llamado `LIFT`:

- Locating our code easy.
- Identify code at a glance.
- Flat structure as long as we can.
- Try to stay dry (don’t repeat yourself).

LIFT nos ayuda a encontrar y entender nuestro código y archivos de forma rápida. Si sientes que te toma mucho tiempo empezar a trabajar una vez abierto tu editor, quizás la forma en la que estructuras tu proyecto no es la indicada. Pero como podemos saber cual es la mejor estructura para nuestros proyectos?

# Versiones
La versión de angular que se esta manejando para los proyectos es la [7.2.15](https://v7.angular.io/docs).En el caso de que se se tenga un proyecto con versiones anteriores le recomendamos seguir las siguientes recomendaciones.

[Guía de Actualización Angular](https://grupobancolombia.visualstudio.com/Vicepresidencia%20Servicios%20de%20Tecnolog%C3%ADa/_wiki/wikis/Vicepresidencia%20Servicios%20de%20Tecnolog%C3%ADa.wiki?pagePath=%2FIngenier%C3%ADa%20de%20Software%2FDesarrollo%20Front%2FGu%C3%ADa%20de%20Actualizaci%C3%B3n%20Angular&pageId=1514&wikiVersion=GBwikiMaster)

# Estructura de Archivos
Angular CLI por defecto nos provee una forma correcta de crear un nuevo proyecto con una estructura bastante cómoda y práctica:

[![N|Solid](https://miro.medium.com/max/319/1*BNK-BPhbac_kU5ZcZd2SiA.png)](https://angular.io/guide/file-structure)

<!-- En el siguiente proyecto podemos identificar esta implementación. -->

<!-- | Lenguaje | Repositorio |
| ------ | ------ |
| ANGULAR | [AW1234001_EDSAdminWeb](https://grupobancolombia.visualstudio.com/Vicepresidencia%20Servicios%20de%20Tecnolog%C3%ADa/_git/AW1234001_EDSAdminWeb) | -->

Generalmente una estructura se define de acuerdo a la complejidad del proyecto. Entre más grande sea, mas orden requiere. Este proyecto tiene separado los componentes. Existe componentes relacionados con el home y el login. A la misma altura se pueden observar los demás componentes. Así mismo, un folder Shared, que contiene archivos que usa de forma global, como lo son mis services, models, helpers, footer, header, y demás componentes que puedas requerir.

Una estructura completa que se puede plantear es la siguiente:

```ansi
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] services
           |-- home-routing.module.ts
           |-- home.module.ts
        |-- example
           |-- [+] components
           |-- [+] services
           |-- example-routing.module.ts
           |-- example.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- config
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
```

## Core Module

Se debe crear un CoreModule con proveedores para los servicios singleton que carga cuando se inicia la aplicación.

Nunca se debe importar CoreModule en ningún otro módulo, ya que debería importar este CoreModule solo en AppModule.

Se puede crear un módulo de funciones denominado "CoreModule" en una carpeta central como la siguiente

## Shared Module

Se debe crear un módulo de funciones denominado SharedModule en una carpeta compartida; por ejemplo, app / shared / shared.module.ts

Se debe crear un módulo compartido con los components, directives y pipes que utiliza en todas la aplicación. Este módulo debe constar de declaraciones completas, la mayoría de ellas serán exportadas. Además, asegúrese de evitar el uso de servicios en el nivel raíz.


> Regla 1 en Angular
El nivel de complejidad de la aplicación va a requerir mejor organización. Tener una estructura bien definida nos ayudará a pensar en escalabilidad.

# Definición Nombres

Uno de los mayores problemas a la hora de entender el código, suele ser el nombre que le damos a nuestros métodos, variables o parámetros.

Antes

```TS
getU(n:string):any[] {
    return this.u.filter(user => {
        return user.n === n;
    });
}
```

Si nos fijamos en el ejemplo anterior podemos ver lo difícil que es entender el objetivo de este método. En cambio si hacemos algo como lo siguiente, se entenderá claramente la función del código:
Ahora

```TS
getUserByName(n:string):any[] {
    return this.u.filter(user => {
        return user.n === n;
    });
}
```

# Código Organizado

Algunas formas de tener un archivo de código mas organizado y legible son:

- Lo más importante debe ir arriba.
- Primero propiedades, después métodos.
- Un Item para un archivo: cada archivo debería contener solamente un componente, al igual que los servicios.
- Solo una responsabilidad: Cada clase o modulo debería tener solamente una responsabilidad.
- El nombre correcto: las propiedades y métodos deberían usar el sistema de camel case (ej: getUserByName), al contrario, las clases (componentes, servicios, etc) deben usar upper camel case (ej: UserComponent).
- Los componentes y servicios deben tener su respectivo sufijo: UserComponent, UserService.
- Imports: los archivos externos van primero.

# Comentarios Código

Cuando estés escribiendo, piensa que probablemente alguien más tendrá que leer tu código en algún momento. Todos hemos sufrido a la hora de leer código ajeno. Es por eso que lo ideal cuando escribimos es pensar en la persona que lo leerá, o incluso en ti mismo. No has llegado a algún trozo de código que tu mismo escribiste pero ni a palos entiendes?

Código auto-descriptivo:
- Explica en tu mismo código, no en comentarios.
- Tus comentarios deben ser claros y entendibles.
- Evita comentar si: 
1. Tratas de explicar que hace tu código, deja que este sea tan claro que se explique solo.
2. Tienes funciones y métodos bien nombrados. No te llenes de obviedades.
- Comenta tu código cuando: 
1. Trates de explicar por qué hiciste lo que hiciste. 
2. Trates de explicar consecuencias de lo que escribiste. 
3. En API docs.

# Componentes
 En nuestros componentes generalmente escribimos nuestras propiedades primero y después nuestros métodos. Así mismo, a veces agrupamos nuestras propiedades o funciones alfabéticamente y otras veces por funcionalidad. Lo importante aquí es mantener una consistencia durante todo el proyecto. 

>Regla 2 en Angular
En Angular, lo más importante debe ir al inicio.

Tambien se debe tener en cuenta:

- Tratar de escribir código lo mas compacto posible. 

>Cada quien tiene una forma distinta de escribir y estructurar sus funciones. Un método no debería tener más de 20 lineas de código, entre más código junto tengas más difícil será entenderlo. Es por esto que utilizamos funciones que nos permitan hacer composición.

- Lo más simples posibles.

- No escribas cosas fuera de lugar!!! Nombrar tu función como `estoEnviaAlgunaCosa` y cometer faltas ortográficas.

# Servicios
Al crear servicios:
- Crea tus servicios como Injectables
- Utiliza tus servicios para recolectar tu data: es total responsabilidad de tus servicios recolectar la data necesaria, ya sea desde una API, localstorage o alguna estructura que hayamos creado nosotros mismos para poder desarrollar. 

>Regla 3 en Angular
Los componentes nunca deben encargarse de pensar como traer data, estos solo deberían encargarse de llamar al servicio que contiene todo lo necesario.

Para mejorar el funcionamiento de las aplicaciones se recomienda seguir las guías de mejores prácticas  que ofrece Angular [Angular Style Guide](https://angular.io/guide/styleguide).

# Recomendaciones

Algunos temas que se debe tener en cuenta son:

## trackBy
Cuando una matriz cambia, Angular vuelve a representar todo el árbol `DOM`. Pero si usa `trackBy`, Angular sabrá qué elemento ha cambiado y solo hará cambios de DOM para ese elemento en particular.

Para obtener una explicación detallada sobre esto, consulte este artículo de [Netanel Basal](https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5).

Antes
```HTML
<li *ngFor="let item of items;">{{ item }}</li>
```
Despues
```HTML
// in the template
<li *ngFor="let item of items; trackBy: trackByFn">{{ item }}</li>
// in the component
trackByFn(index, item) {    
   return item.id; // unique id corresponding to the item
}
```

## const vs let
Al declarar variables, use const cuando el valor no se va a reasignar.

¿Por qué?

Usar let y const cuando sea apropiado aclara la intención de las declaraciones. También ayudará a identificar problemas cuando un valor se reasigne a una constante accidentalmente al lanzar un error de tiempo de compilación. También ayuda a mejorar la legibilidad del código.

Antes
```TS
let car = 'ludicrous car';

let myCar = `My ${car}`;
let yourCar = `Your ${car};

if (iHaveMoreThanOneCar) {
   myCar = `${myCar}s`;
}

if (youHaveMoreThanOneCar) {
   yourCar = `${youCar}s`;
}
```

Despues
```TS
// the value of car is not reassigned, so we can make it a const
const car = 'ludicrous car';

let myCar = `My ${car}`;
let yourCar = `Your ${car};

if (iHaveMoreThanOneCar) {
   myCar = `${myCar}s`;
}

if (youHaveMoreThanOneCar) {
   yourCar = `${youCar}s`;
}
```
## Operadores Pipeable

Use operadores pipeable cuando use operadores RxJs.

¿Por qué?

Los operadores compilables son inestables, lo que significa que solo se incluirá el código que necesitamos ejecutar cuando se importen.

Esto también facilita la identificación de operadores no utilizados en los archivos.

Nota: Esto necesita la versión angular 5.5+.

Antes
```TS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

iAmAnObservable
    .map(value => value.item)
    .take(1);
```
Despues
```TS
import { map, take } from 'rxjs/operators';

iAmAnObservable
    .pipe(
       map(value => value.item),
       take(1)
     );
```

## Ailsar API hacks
No todas las API son a prueba de balas, a veces necesitamos agregar algo de lógica en el código para compensar los errores en las API. En lugar de tener los hacks en los componentes donde se necesitan, es mejor aislarlos en un lugar, como en un servicio y usar el servicio del componente.

¿Por qué?

Esto ayuda a mantener a los piratas informáticos "más cerca de la API", por lo que lo más cerca posible de la solicitud de red. De esta manera, menos de tu código está tratando con el código no hackeado. Además, es un lugar donde viven todos los hacks y es más fácil encontrarlos. Cuando se solucionan los errores en las API, es más fácil buscarlos en un archivo en lugar de buscar los hacks que podrían extenderse a través del código base.

También puede crear etiquetas personalizadas como `API_FIX` similar a TODO y etiquetar las correcciones con él para que sea más fácil de encontrar.

## Subscribe in template
Evite suscribirse a elementos observables de componentes y, en su lugar, suscríbase a los elementos observables de la plantilla.

¿Por qué?

Los pipes asíncronos se dan de baja automáticamente y simplifican el código al eliminar la necesidad de administrar las suscripciones manualmente. También reduce el riesgo de olvidar accidentalmente cancelar la suscripción de una suscripción en el componente, lo que provocaría una pérdida de memoria. Este riesgo también puede mitigarse utilizando una regla de pelusa para detectar observables anulados.

Esto también evita que los componentes tengan estado e introduzcan errores donde los datos se mutan fuera de la suscripción.

Antes
```HTML
// // template
<p>{{ textToDisplay }}</p>
// component
iAmAnObservable
    .pipe(
       map(value => value.item),
       takeUntil(this._destroyed$)
     )
    .subscribe(item => this.textToDisplay = item);
```

Despues
```HTML
// template
<p>{{ textToDisplay$ | async }}</p>
// component
this.textToDisplay$ = iAmAnObservable
    .pipe(
       map(value => value.item)
     );
```

## Limpiar suscripciones
Cuando se suscriba a observables, siempre asegúrese de cancelar su suscripción de forma apropiada utilizando operadores como `take`, `takeUntil`, etc.

¿Por qué?

Si no puede darse de baja de los elementos observables, se producirán pérdidas de memoria no deseadas ya que el flujo observable se deja abierto, posiblemente incluso después de que se haya destruido un componente / el usuario haya navegado a otra página.

Aún mejor, haga una regla para detectar observables que no hayan sido cancelados.

Antes
```TS
iAmAnObservable
    .pipe(
       map(value => value.item)     
     )
    .subscribe(item => this.textToDisplay = item);
```
Despues
Usando `takeUntil` cuando quiera escuchar los cambios hasta que otro observable emita un valor:
```TS
private _destroyed$ = new Subject();

public ngOnInit (): void {
    iAmAnObservable
    .pipe(
       map(value => value.item)
      // We want to listen to iAmAnObservable until the component is destroyed,
       takeUntil(this._destroyed$)
     )
    .subscribe(item => this.textToDisplay = item);
}

public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
}
```

Usar un tema privado como este es un patrón para administrar la cancelación de la suscripción de muchos observables en el componente.

Usando `take` cuando desee solo el primer valor emitido por el observable:
```TS
iAmAnObservable
    .pipe(
       map(value => value.item),
       take(1),
       takeUntil(this._destroyed$)
    )
    .subscribe(item => this.textToDisplay = item);
```
Tenga en cuenta el uso de `takeUntil` con `take` aquí. Esto es para evitar las pérdidas de memoria causadas cuando la suscripción no ha recibido un valor antes de que el componente se destruyera. Sin takeUntil aquí, la suscripción aún se quedaría hasta que obtenga el primer valor, pero dado que el componente ya se ha destruido, nunca obtendrá un valor, lo que lleva a una pérdida de memoria.

## Use appropriate operators
Cuando use `flattening operators` con sus observables, use el operador apropiado para la situación.

`switchMap`: cuando quiere ignorar las emisiones anteriores cuando hay una nueva emisión

`mergeMap`: cuando quiera manejar simultáneamente todas las emisiones

`concatMap`: cuando desea manejar las emisiones una tras otra a medida que se emiten

`exhaustMap`: cuando desea cancelar todas las nuevas emisiones mientras se procesa una emisión anterior

Para una explicación más detallada sobre esto, consulte este artículo de [Nicholas Jamieson](https://blog.angularindepth.com/switchmap-bugs-b6de69155524).

## Lazy load
Cuando sea posible, intente `lazy load` en los módulos en su aplicación Angular.Lazy load es cuando se carga algo solo cuando se usa, por ejemplo, cuando se carga un componente solo cuando se ve.

¿Por qué?

Esto reducirá el tamaño de la aplicación que se cargará y puede mejorar el tiempo de inicio de la aplicación al no cargar los módulos que no se utilizan.

Antes
```TS
// app.routing.ts
{ path: 'not-lazy-loaded', component: NotLazyLoadedComponent }
```

Despues
```TS
// app.routing.ts
{ 
  path: 'lazy-load',
  loadChildren: 'lazy-load.module#LazyLoadModule' 
}

// lazy-load.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadComponent }   from './lazy-load.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
         { 
             path: '',
             component: LazyLoadComponent 
         }
    ])
  ],
  declarations: [
    LazyLoadComponent
  ]
})
export class LazyModule {}
```
## Evite tener suscripciones dentro de las suscripciones

A veces es posible que desee valores de más de un observable para realizar una acción. En este caso, evite suscribirse a un observable en el bloque de suscripción de otro observable. En su lugar, utilice operadores de encadenamiento apropiados. Los operadores de encadenamiento se ejecutan en observables del operador anterior a ellos. Algunos operadores de cadena son: `withLatestFrom`, `combineLatest`, etc.


¿Por qué?

smell / legibilidad / complejidad del código: no utilizar RxJs en toda su extensión, sugiere que el desarrollador no está familiarizado con el área de superficie API de RxJs.

Performance: Si los observables están fríos, se suscribirá a firstObservable, esperará a que se complete, LUEGO iniciará el trabajo del segundo observable. Si se tratara de solicitudes de red, se mostraría como síncrono / cascada.

Antes
```TS
firstObservable$.pipe(
   take(1)
)
.subscribe(firstValue => {
    secondObservable$.pipe(
        take(1)
    )
    .subscribe(secondValue => {
        console.log(`Combined values are: ${firstValue} & ${secondValue}`);
    });
});
```

Despues
```TS
firstObservable$.pipe(
    withLatestFrom(secondObservable$),
    first()
)
.subscribe(([firstValue, secondValue]) => {
    console.log(`Combined values are: ${firstValue} & ${secondValue}`);
});
```

## Avoid any; type everything
Siempre declare variables o constantes con un tipo diferente a cualquier otro.

¿Por qué?

Al declarar variables o constantes en Typescript sin una escritura, la escritura de la variable / constante se deducirá por el valor que se le asigna. Esto causará problemas no deseados. Un ejemplo clásico es:

```TS
const x = 1;
const y = 'a';
const z = x + y;

console.log(`Value of z is: ${z}`

// Output
Value of z is 1a
```
Esto puede causar problemas no deseados cuando espera que Y también sea un número. Estos problemas se pueden evitar escribiendo las variables de manera apropiada.

```TS
const x: number = 1;
const y: number = 'a';
const z: number = x + y;

// This will give a compile error saying:

Type '"a"' is not assignable to type 'number'.

const y:number
```

De esta manera, podemos evitar errores causados - - por tipos faltantes.

Otra ventaja de tener buenos tipados en su aplicación es que hace que la refactorización sea más fácil y segura.

Considera este ejemplo:
```TS
public ngOnInit (): void {
    let myFlashObject = {
        name: 'My cool name',
        age: 'My cool age',
        loc: 'My cool location'
    }
    this.processObject(myFlashObject);
}

public processObject(myObject: any): void {
    console.log(`Name: ${myObject.name}`);
    console.log(`Age: ${myObject.age}`);
    console.log(`Location: ${myObject.loc}`);
}

// Output
Name: My cool name
Age: My cool age
Location: My cool location
```

Digamos que queremos cambiar el nombre de la ubicación de la propiedad a mi ubicación en `myFlashObject`:
```TS
public ngOnInit (): void {
    let myFlashObject = {
        name: 'My cool name',
        age: 'My cool age',
        location: 'My cool location'
    }
    this.processObject(myFlashObject);
}

public processObject(myObject: any): void {
    console.log(`Name: ${myObject.name}`);
    console.log(`Age: ${myObject.age}`);
    console.log(`Location: ${myObject.loc}`);
}

// Output
Name: My cool name
Age: My cool age
Location: undefined
```

Si no tenemos una escritura en `myFlashObject`, piensa que la propiedad loc en myFlashObject es simplemente indefinida en lugar de que no sea una propiedad válida.

Si tuviéramos que escribir para `myFlashObject`, obtendríamos un buen error de tiempo de compilación como se muestra a continuación:
```TS
type FlashObject = {
    name: string,
    age: string,
    location: string
}

public ngOnInit (): void {
    let myFlashObject: FlashObject = {
        name: 'My cool name',
        age: 'My cool age',
        // Compilation error
        Type '{ name: string; age: string; loc: string; }' is not assignable to type 'FlashObjectType'.
        Object literal may only specify known properties, and 'loc' does not exist in type 'FlashObjectType'.
        loc: 'My cool location'
    }
    this.processObject(myFlashObject);
}

public processObject(myObject: FlashObject): void {
    console.log(`Name: ${myObject.name}`);
    console.log(`Age: ${myObject.age}`)
    // Compilation error
    Property 'loc' does not exist on type 'FlashObjectType'.
    console.log(`Location: ${myObject.loc}`);
}
```
Si está iniciando un nuevo proyecto, vale la pena establecerlo de forma `strict:true` en el archivo `tsconfig.json` para habilitar todas las opciones de comprobación de tipo estrictas.

## Hacer uso de las reglas lint.
`tslint` tiene varias opciones integradas como `no-any`, `no-magic-number`s, `no-console`, etc. que puede configurar en su `tslint.json` para imponer ciertas reglas en su base de código.

¿Por qué?

Tener reglas lint en su lugar significa que obtendrá un error agradable cuando está haciendo algo que no debería ser. Esto impondrá consistencia en su aplicación y legibilidad. Consulte [aqui](https://palantir.github.io/tslint/rules/) más reglas que puede configurar.

## Realizar pequeños componentes reutilizables.
Extraiga las piezas que se pueden reutilizar en un componente y conviértalo en uno nuevo. Haga que el componente sea lo más dumb posible, ya que esto hará que funcione en más escenarios. Hacer que un componente dumb significa que el componente no tiene ninguna lógica especial y opera puramente en función de las entradas y salidas que se le proporcionan.

Como regla general, el último hijo en el árbol de componentes será el más dumb de todos.

¿Por qué?

Los componentes reutilizables reducen la duplicación de código, lo que facilita el mantenimiento y la realización de cambios.

Los componentes dumb son más simples, por lo que es menos probable que tengan errores. Los componentes dumb te hacen pensar más sobre la API de componentes públicos y te ayudan a detectar preocupaciones mixtas.

## Los componentes solo deben lidiar con la lógica de visualización
Evite tener cualquier otra lógica que no sea la lógica de visualización en su componente siempre que pueda y haga que el componente se ocupe únicamente de la lógica de visualización.

¿Por qué?

Los componentes están diseñados para fines de presentación y controlan lo que debe hacer la vista. Cualquier lógica de negocios se debe extraer en sus propios métodos / servicios cuando sea apropiado, separando la lógica de negocios de la lógica de vista.

La lógica de negocios suele ser más fácil de realizar una prueba unitaria cuando se extrae a un servicio, y puede ser reutilizada por cualquier otro componente que necesite la misma lógica de negocios.

## Métodos vacíos largos
Los métodos largos generalmente indican que están haciendo demasiadas cosas. Trate de usar el principio de responsabilidad única. El método en sí en su totalidad podría estar haciendo una cosa, pero dentro de él, hay algunas otras operaciones que podrían estar sucediendo. Podemos extraer esos métodos en su propio método y hacer que hagan una cosa cada uno y usarlos en su lugar.

¿Por qué?

Los métodos largos son difíciles de leer, entender y mantener. También son propensos a los errores, ya que cambiar una cosa puede afectar muchas otras cosas en ese método. También hacen que la refactorización (que es una cosa clave en cualquier aplicación) sea difícil.

Esto a veces se mide como "complejidad ciclomática". También hay algunas reglas de [TSLint](https://www.npmjs.com/package/tslint-sonarts) para detectar la complejidad ciclomática / cognitiva, que podría usar en su proyecto para evitar errores y detectar smell de código y problemas de mantenimiento.

## Código Repetido
No te repitas a ti mismo. Asegúrese de que no tiene el mismo código copiado en diferentes lugares en el código base. Extraiga el código de repetición y utilícelo en lugar del código repetido.

¿Por qué?

Tener el mismo código en varios lugares significa que si queremos hacer un cambio en la lógica de ese código, debemos hacerlo en varios lugares. Esto hace que sea difícil de mantener y también es propenso a errores en los que no podemos actualizarlo en todos los casos. Lleva más tiempo realizar cambios en la lógica y probarla también es un proceso largo.

En esos casos, extraiga el código que se repite y utilícelo en su lugar. Esto significa solo un lugar para cambiar y una cosa para probar. Tener menos código duplicado enviado a los usuarios significa que la aplicación será más rápida.

## Añadir mecanismos de caché
Al hacer llamadas a la API, las respuestas de algunos de ellos no cambian a menudo. En esos casos, puede agregar un mecanismo de almacenamiento en caché y almacenar el valor de la API. Cuando se realice otra solicitud a la misma API, verifique si hay un valor para ella en la memoria caché y, de ser así, utilícelo. De lo contrario, haga la llamada a la API y almacene en caché el resultado.

Si los valores cambian, pero no con frecuencia, puede introducir un tiempo de caché donde puede verificar cuándo se almacenó en la memoria caché por última vez y decidir si desea o no llamar a la API.

¿Por qué?

Tener un mecanismo de almacenamiento en caché significa evitar llamadas a la API no deseadas. Al hacer solo las llamadas a la API cuando es necesario y evitar la duplicación, la velocidad de la aplicación mejora, ya que no tenemos que esperar por la red. También significa que no descargamos la misma información una y otra vez.

## Evitar la lógica en las plantillas
Si tiene algún tipo de lógica en sus plantillas, incluso si es una cláusula simple de &&, es bueno extraerla en su componente.

¿Por qué?

Tener lógica en la plantilla significa que no es posible realizar una prueba unitaria y, por lo tanto, es más propenso a errores al cambiar el código de la plantilla.

## Los Strings deben ser seguros
Si tiene una variable de tipo cadena que puede tener solo un conjunto de valores, en lugar de declararlo como un tipo de cadena, puede declarar la lista de valores posibles como el tipo.

¿Por qué?

Al declarar el tipo de la variable de manera apropiada, podemos evitar errores al escribir el código durante el tiempo de compilación en lugar de durante el tiempo de ejecución.

<br/>
<br/>
	
# Glosario de Términos


<br/>
<br/>

<center>

**Historial de Versiones**

| Versión | Área                   | Participante             | Observaciones                                                                                        | Fecha      |
| ------- | ---------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| 1.0.0   | Ingeniería de Software | Juan Camilo Cartagena Salazar | Versión Inicial                                                                                      | 04/07/2019 |

</center>