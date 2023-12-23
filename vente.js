function validateForm() {
    console.log('hello world')
    var objet1 = {
        designation: "modifier moi",
        prix : 100
    };
    var objet2 = {
        designation: "modifier moi",

        prix : 250

   };
    var objet3 = {
        designation: "modifier moie",
        prix : 300
   };
    var objet4 = {
        designation: "modifier moi",
        prix : 250
    };
    var objet5 = {
        designation: "modifier moi",
        prix : 500
    };
    var objet6 = {
        designation: "modifier moi",
        prix : 50
    };
    var objet7 = {
        designation: "maiis",
        prix : 200
    };
    var objet8 = {
        designation: "concombre",
        prix : 200
    };
    var objet9 = {
        designation: "tomate",
        prix : 25
    };
    var objet10 = {
        designation: "ognon",
        prix : 50
    };
    var objet11 = {
        designation: "ail",
        prix : 100
    };
    var objet12 = {
        designation: "citron",
        prix : 25
    };
    var objet13 = {
        designation: "asiette",
        prix : 500
    };
    var objet14 = {
        designation: "casserole",
        prix : 2500
    };
    var objet15 = {
        designation: "louche",
        prix : 250
    };
    var objet16 = {
        designation: "pouelle",
        prix : 1000
    };
    var objet17 = {
        designation: "tablier",
        prix : 500
    };
    
    var nom = document.getElementById("fiel").value;
    var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17;
    var prixTotal = [];
    var j = 0;


    var tab = [],
        prixUnit = [],
        quantite = [];

        
   if(document.getElementById("fiel").value == ""){
        alert("veuiller entrer le nom du clien ");
    }
    else{
       
        if(document.getElementById("banane").checked){
            objet1.designation = document.getElementById("banane").value;
           
            tab[j] = objet1.designation;
            q1 = prompt("entrer la quantite de " + objet1.designation);
            quantite[j] = q1;
            prixUnit[j] = objet1.prix;
            prixTotal[j] = objet1.prix * q1;
            j++;
        } 
        if(document.getElementById("avocat").checked){
            objet2.designation = document.getElementById("avocat").value;
           
            tab[j] = objet2.designation;
            q2 = prompt("entrer la quantite de " + objet2.designation);
            quantite[j] = q2;
            prixUnit[j] = objet2.prix;
            prixTotal[j] = objet2.prix * q2;
            j++;
        } 
        if(document.getElementById("papaye").checked){
            objet3.designation = document.getElementById("papaye").value;
           
            tab[j] = objet3.designation;
            q3 = prompt("entrer la quantite de " + objet3.designation);
            quantite[j] = q3;
            prixUnit[j] = objet3.prix;
            prixTotal[j] = objet3.prix * q3;
            j++;
        } 
        if(document.getElementById("ananas").checked){
            objet4.designation = document.getElementById("ananas").value;
           
            tab[j] = objet4.designation;
            q4 = prompt("entrer la quantite de " + objet4.designation);
            quantite[j] = q4;
            prixUnit[j] = objet4.prix;
            prixTotal[j] = objet4.prix * q4;
            j++;
        } 
        if(document.getElementById("pasteque").checked){
            objet5.designation = document.getElementById("pasteque").value;
           
            tab[j] = objet5.designation;
            q5 = prompt("entrer la quantite de " + objet5.designation);
            quantite[j] = q5;
            prixUnit[j] = objet5.prix;
            prixTotal[j] = objet5.prix * q5;
            j++;
        } 
        if(document.getElementById("goyave").checked){
            objet6.designation = document.getElementById("goyave").value;
           
            tab[j] = objet6.designation;
            q6=prompt("entrer la quantite de " + objet6.designation);
            quantite[j] = q6;
            prixUnit[j] = objet6.prix;
            prixTotal[j] = objet6.prix * q6;
            j++;
        } 
        if(document.getElementById("maiis").checked){
            objet7.designation = document.getElementById("maiis").value;
           
            tab[j] = objet7.designation;
            q7 = prompt("entrer la quantite de " + objet7.designation);
            quantite[j] = q7;
            prixUnit[j] = objet7.prix;
            prixTotal[j] = objet7.prix * q7;
            j++;
        } 
        if(document.getElementById("concombre").checked){
            objet8.designation = document.getElementById("concombre").value;
           
            tab[j] = objet8.designation;
            q8 = prompt("entrer la quantite de " + objet8.designation);
            quantite[j] = q8;
            prixUnit[j] = objet8.prix;
            prixTotal[j] = objet8.prix * q8;
            j++;
        } 
        if(document.getElementById("tomate").checked){
            objet9.designation = document.getElementById("tomate").value;
           
            tab[j] = objet9.designation;
            q9 = prompt("entrer la quantite de " + objet9.designation);
            quantite[j] = q9;
            prixUnit[j] = objet9.prix;
            prixTotal[j] = objet9.prix * q9;
            j++;
        } 
        if(document.getElementById("ognon").checked){
            objet10.designation = document.getElementById("ognon").value;
           
            tab[j] = objet10.designation;
            q10 = prompt("entrer la quantite de " + objet10.designation);
            quantite[j] = q10;
            prixUnit[j] = objet10.prix;
            prixTotal[j] = objet10.prix * q10;
            j++;
        } 
        if(document.getElementById("ail").checked){
            objet11.designation = document.getElementById("ail").value;
           
            tab[j] = objet11.designation;
            q11 = prompt("entrer la quantite de " + objet11.designation);
            quantite[j] = q11;
            prixUnit[j] = objet11.prix;
            prixTotal[j] = objet11.prix * q11;
            j++;
        } 
        if(document.getElementById("citron").checked){
            objet12.designation = document.getElementById("citron").value;
           
            tab[j] = objet12.designation;
            q12 = prompt("entrer la quantite de " + objet12.designation);
            quantite[j] = q12;
            prixUnit[j] = objet12.prix;
            prixTotal[j] = objet12.prix * q12;
            j++;
        } 
        if(document.getElementById("assiette").checked){
            objet13.designation = document.getElementById("assiette").value;
           
            tab[j] = objet13.designation;
            q13 = prompt("entrer la quantite de " + objet13.designation);
            quantite[j] = q13;
            prixUnit[j] = objet13.prix;
            prixTotal[j] = objet13.prix*q13;
            j++;
        } 
        if(document.getElementById("casserole").checked){
            objet14.designation = document.getElementById("casserole").value;
           
            tab[j] = objet14.designation;
            q14 = prompt("entrer la quantite de " + objet14.designation);
            quantite[j] = q14;
            prixUnit[j] = objet14.prix;
            prixTotal[j] = objet14.prix*q14;
            j++;
        } 
        if(document.getElementById("louche").checked){
            objet15.designation = document.getElementById("louche").value;
           
            tab[j] = objet15.designation;
            q15 = prompt("entrer la quantite de " + objet15.designation);
            quantite[j] = q15;
            prixUnit[j] = objet15.prix;
            prixTotal[j] = objet15.prix * q15;
            j++;
        } 
        if(document.getElementById("pouelle").checked){
            objet16.designation = document.getElementById("pouelle").value;
           
            tab[j] = objet16.designation;
            q16 = prompt("entrer la quantite de " + objet16.designation);
            quantite[j] = q16;
            prixUnit[j] = objet16.prix;
            prixTotal[j] = objet16.prix * q16;
            j++;
        } 
        if(document.getElementById("tablier").checked){
            objet17.designation = document.getElementById("tablier").value;
           
            tab[j] = objet17.designation;
            q17 = prompt("entrer la quantite de " + objet17.designation);
            quantite[j] = q17;
            prixUnit[j] = objet17.prix;
            prixTotal[j] = objet17.prix * q17;
            j++;
        }
        

        if(j == 0){
            alert("vous n avez rien selectioner");
        }
        else{
            if(confirm("generer la facture")){
                let total = 0;
                for(let i = 0; i < j; i++) {
                    total = total + prixTotal[i];
                }
                    
                document.write("<!DOCTYPE html> <html lang='fr'><head>" + 
                    "<meta charset='UTF-8'> <meta name='language' content='fr'>" +
                    "<title>plate forme de vente en ligne</title></head>" +
                    "<body style='background-color: orange'><center><h1>plate forme de vente</h1><h2><u>Facture de M./Mme</u> : " + nom + "</h2>" +
                    "<br><div><table border='1'>" +
                    "<th>designation</th><th>quantite</><th>prixUnit</th><th>prixTotal</th>");
                for(let k = 0; k < j; k++){
                    ("<tr><td>" + tab[k] + "</td></tr><tr><td>" + quantite[k] + "</td></tr><tr><td>" + prixUnit[k] + "</td></tr><tr><td>" + prixTotal[k] + "</td></tr>");

                        
                    document.write("</table><div> <span>,<strong> Total = " + total + "FCFA</span>,</strong> </div> <div>" +
                        "<br><a href='javascript:window.print()'><button>Imprimer votre facture</button></a></div>");
                }
            }
            else {
                 alert("annulation de la commande effectuer");
            }
        }
        
    }




}