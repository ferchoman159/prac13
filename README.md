<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./puntero.js"></script>
</head>
<body>
<h1>Este es el titulo</h1>
<p id="cambio">Empezamos con los contenidos</p>
<p>Segundo texto con etique p</p>
<select  name="operaciones" id="operaciones">
    <option >Selecione la operacion</option>
    <option  value="+">Suma</option>
    <option value="-">Resta</option>
    <option value="*">Multiṕlicacion</option>
    <option value="/">Division</option>
</select>
<label for="num1">Ingresa un valor numerico (entero)</label>
<input type="number" name="num1" id="num1"><br>
<label for="num2">Ingresa un segundo valor numerico (entero)</label>
<input type="number" name="num2" id="num2"><br>
<input type="button" value="Calcular operacion" id="btnoperaciones">
<p id="resultado"></p>
<p id="dinamico">contenido que aparece y desaparece</p>
<button id="Mostrar">presiona para mostrar</button>
<button id="ocultar">presiona para ocultar</button>
<button id="cssborde">Borde con css</button>
</body>
</html>
