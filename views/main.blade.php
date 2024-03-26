{{-- @include('animals')
@include('dog') --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classes</title>
    <link rel="stylesheet" href="./css/Css.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

    <script src="https://kit.fontawesome.com/62e7dcf6fa.js" crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

   
</head>

<body>
    <section>
        <p>Naam: {{$Naam}}</p>
        <p>Password: {{$Password}}</p>
    </section>
    
    @yield('header')


    @yield('content')



    @yield('footer')

<script src="/javascript/changeForm.js"></script>
    

</body>

</html>