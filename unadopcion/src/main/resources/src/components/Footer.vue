<template>
    <div class="Footer">
      <br><nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-bottom">
            <a class="navbar-brand" href="principal">
                <img src="@/assets/UNAdopcionBN.png" alt="Logo UNadopcion" height="40">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item" id="">
                        <a href="https://co.linkedin.com/company/imagine-cx/" class="mx-2">
                            <img src="@/assets/linkedin.png" alt="linkedin" height="50" width="50">
                        </a>
                    </li>
                    <li class="nav-item" id="">
                        <a href="https://web.whatsapp.com/" class="mx-2">
                            <img src="@/assets/whatsapp.svg" alt="whatsapp" height="50" width="50">
                        </a>
                    </li>
                    <li class="nav-item" id="">
                        <a href="https://www.facebook.com/pages/category/Company/Imagine-CX-1841472189510552/" class="mx-2">
                            <img src="@/assets/facebook.svg" alt="facebook" height="50" width="50">
                        </a>
                    </li>
                    <li class="nav-item" id="">
                        <a href="https://gmail.com/" class="mx-2 ">
                            <img src="@/assets/gmail.svg" alt="gmail" height="50" width="50">
                        </a>
                    </li>
                    <li class="nav-item" id="">
                        <a href="https://twitter.com/" class="mx-2 ">
                            <img src="@/assets/gorjeo.svg" alt="twitter" height="50" width="50">
                        </a>
                    </li>
                    <li class="nav-item" id="">
                        <a href="https://www.instagram.com/accounts/login/?next=/imaginecx_/" class="mx-2 ">
                            <img src="@/assets/instagram.svg" alt="instagram" height="50" width="50">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    name: "Header",
    props: {
        nombre: String,
    }
}
</script>
