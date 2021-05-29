// Auto focus button
function autoFocus() {
	document.getElementById("cta-input").focus();
}

// translate website
const esLang1 = document.getElementById("es-lang1");
const esLang2 = document.getElementById("es-lang2");
const enLang1 = document.getElementById("en-lang1");
const enLang2 = document.getElementById("en-lang2");

esLang1.onclick = function () {
    // Hidde display
    esLang1.style.display = "none";
    esLang2.style.display = "none";
    // Show english
    enLang1.style.display = "inline";
    enLang2.style.display = "inline";
	document.getElementById("title").innerHTML = "¡Proximamente!";
	document.getElementById("title-p").innerHTML =
		"Es un año nuevo y una nueva oportunidad para romper las reglas y brillar. Nuestra marca de labiales está diseñada para innovar fórmulas y ofrecerte productos de la mejor calidad, elaborados con los mejores ingredientes. Nuestro propósito es mezclar frescura y elegancia en cada Botella. ¡Para que te sientas segura en tu propia piel!";
	document.getElementById("title-mail").innerHTML =
		"¡Suscríbete a nuestra lista de correo!";
	document.getElementById("cta-mail").innerHTML = "Unirse";
	document.getElementById("cta-input").placeholder="Ingresa tu correo electronico";
	document.getElementById("socialMess").innerHTML = "Siguenos"
	document.getElementById("btn-nav1").innerHTML = "Únete";
	document.getElementById("btn-nav2").innerHTML = "Únete";
};
esLang2.onclick = function () {
    // Hidde display
    esLang1.style.display = "none";
    esLang2.style.display = "none";
    // Show english
    enLang1.style.display = "inline";
    enLang2.style.display = "inline";
	// Translation
	document.getElementById("title").innerHTML = "¡Proximamente!";
	document.getElementById("title-p").innerHTML =
		"Es un año nuevo y una nueva oportunidad para romper las reglas y brillar. Nuestra marca de labiales está diseñada para innovar fórmulas y ofrecerte productos de la mejor calidad, elaborados con los mejores ingredientes. Nuestro propósito es mezclar frescura y elegancia en cada Botella. ¡Para que te sientas segura en tu propia piel!";
	document.getElementById("title-mail").innerHTML =
		"¡Unete a nuestra lista de correo!";
	document.getElementById("cta-mail").innerHTML = "Unirse";
	document.getElementById("cta-input").placeholder="Ingresa tu correo electronico";
	document.getElementById("socialMess").innerHTML = "Siguenos"
	document.getElementById("btn-nav1").innerHTML = "Únete";
	document.getElementById("btn-nav2").innerHTML = "Únete";
};
enLang1.onclick = function () {
    // Hidde display
    esLang1.style.display = "inline";
    esLang2.style.display = "inline";
    // Show english
    enLang1.style.display = "none";
    enLang2.style.display = "none";
	// Translate
	document.getElementById("title").innerHTML = "¡Coming soon!";
	document.getElementById("title-p").innerHTML = "It's a new year and a new opportunity to break the rules and shine. Our lipgloss brand is designed to innovate formulas and offer you the best quality products, made with the finest ingredients. Our purpose is to mix freshness and elegance in every bottle. So you can feel confident in your own skin.";
	document.getElementById("title-mail").innerHTML =
		"¡Join to our mailing list!";
	document.getElementById("cta-mail").innerHTML = "Join";
	document.getElementById("cta-input").placeholder="Enter your e-mail address";
	document.getElementById("socialMess").innerHTML = "Follow us"
	document.getElementById("btn-nav1").innerHTML = "Join";
	document.getElementById("btn-nav2").innerHTML = "Join";
};
enLang2.onclick = function () {
    // Hidde display
    esLang1.style.display = "inline";
    esLang2.style.display = "inline";
    // Show english
    enLang1.style.display = "none";
    enLang2.style.display = "none";
	// Translate
	document.getElementById("title").innerHTML = "¡Coming soon!";
	document.getElementById("title-p").innerHTML = "It's a new year and a new opportunity to break the rules and shine. Our lipgloss brand is designed to innovate formulas and offer you the best quality products, made with the finest ingredients. Our purpose is to mix freshness and elegance in every bottle. So you can feel confident in your own skin.";
	document.getElementById("title-mail").innerHTML =
		"¡Join to our mailing list!";
	document.getElementById("cta-mail").innerHTML = "Join";
	document.getElementById("cta-input").placeholder="Enter your e-mail address";
	document.getElementById("socialMess").innerHTML = "Follow us"
	document.getElementById("btn-nav1").innerHTML = "Join";
	document.getElementById("btn-nav2").innerHTML = "Join";
};