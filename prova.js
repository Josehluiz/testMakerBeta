document.addEventListener("DOMContentLoaded", function () {
    const containerPerguntas = document.getElementById("containerPerguntas");

    for (let i = 1; i <= 5; i++) {
        const container = document.createElement("div");
        container.className = "container";

        const row = document.createElement("div");
        row.className = "row justify-content-md-center";

        const col = document.createElement("div");
        col.className = "col-md-5 mt-5";

        const heading = document.createElement("h2");
        heading.textContent = `Pergunta ${i}`;

        const question = document.createElement("p");
        question.textContent = "Qual é a capital da França?";

        const formCheck1 = document.createElement("div");
        formCheck1.className = "form-check";

        const radio1 = document.createElement("input");
        radio1.className = "form-check-input";
        radio1.type = "radio";
        radio1.name = `flexRadioDefault${i}`;
        radio1.id = `flexRadioDefault${i}1`;

        const label1 = document.createElement("label");
        label1.className = "form-check-label";
        label1.setAttribute("for", radio1.id);
        label1.textContent = "França";

        formCheck1.appendChild(radio1);
        formCheck1.appendChild(label1);

        const formCheck2 = document.createElement("div");
        formCheck2.className = "form-check";

        const radio2 = document.createElement("input");
        radio2.className = "form-check-input";
        radio2.type = "radio";
        radio2.name = `flexRadioDefault${i}`;
        radio2.id = `flexRadioDefault${i}2`;
        radio2.checked = true;

        const label2 = document.createElement("label");
        label2.className = "form-check-label";
        label2.setAttribute("for", radio2.id);
        label2.textContent = "França";

        formCheck2.appendChild(radio2);
        formCheck2.appendChild(label2);

        col.appendChild(heading);
        col.appendChild(question);
        col.appendChild(formCheck1);
        col.appendChild(formCheck2);

        row.appendChild(col);
        container.appendChild(row);

        containerPerguntas.appendChild(container);
    }
});
