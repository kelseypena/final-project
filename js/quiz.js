var form = document.getElementById("myForm");
form.onsubmit = checkAnswers;

function checkAnswers() {
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var q = [];
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
        case 'INPUT':
            switch (form.elements[i].type) {
            case 'text':
            case 'email':
            case 'tel':
            case 'url':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'submit':
                q.push(form.elements[i].name + "=" + form.elements[i].value);
                break;
            case 'checkbox':
            case 'radio':
                if (form.elements[i].checked) {
                    q.push(form.elements[i].name + "=" + form.elements[i].value);
                }
                break;
            }
            break;
        case 'file':
            break;
        case 'TEXTAREA':
            q.push(form.elements[i].name + "=" + form.elements[i].value);
            break;
        case 'SELECT':
            switch (form.elements[i].type) {
            case 'select-one':
                q.push(form.elements[i].name + "=" + form.elements[i].value);
                break;
            case 'select-multiple':
                for (var j = 0; j < form.elements.length; j++) {
                    if (form.elements[i].options[j].selected) {
                        q.push(form.elements[i].name + "=" + form.elements[i].options[j].value);
                    }
                }
                break;
            }
            break;
        case 'BUTTON':
            switch (form.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
                q.push(form.elements[i].name + "=" + form.elements[i].value);
                break;
            }
            break;
        }
    }
    
    var names = [];
    var values = [];
    var arAnswer = 0;
    var saAnswer = 0;
    var crAnswer = 0;
    var itAnswer = 0;
    var destination;
    
    for (var k=0; k < q.length; k++){
        var a = q[k].split('=');
names[k] = a[0];
        values[k] = a[1];
    }

    for (var m=0; m < names.length; m++){
        if (names[m] == "food" && values[m] == "chimichurri"){
            arAnswer +=1;
        }
         if (names[m] == "activity" && values[m] == "hiking"){
            arAnswer +=1;
        }
         if (names[m] == "animal" && values[m] == "jaguar"){
            arAnswer +=1;
        }
         if (names[m] == "concert" && values[m] == "tango"){
            arAnswer +=1;
        }
        else if (names[m] == "food" && values[m] == "bobotie"){
            saAnswer +=1;
        }
        else if (names[m] == "activity" && values[m] == "beach"){
            saAnswer +=1;
        }
       else if (names[m] == "animal" && values[m] == "elephant"){
            saAnswer +=1;
        } 
       else if (names[m] == "concert" && values[m] == "reggae"){
            saAnswer +=1;
        }
       else if (names[m] == "food" && values[m] == "veproknedlozelo"){
            crAnswer +=1;
        } 
        else if (names[m] == "activity" && values[m] == "market"){
            crAnswer +=1;
        }
        else if (names[m] == "animal" && values[m] == "otter"){
            crAnswer +=1;
        }
        else if (names[m] == "concert" && values[m] == "punk"){
            crAnswer +=1;
        }
        else if (names[m] == "food" && values[m] == "linguine"){
            itAnswer +=1;
        }
        else if (names[m] == "activity" && values[m] == "museum"){
            itAnswer +=1;
        }
        else if (names[m] == "animal" && values[m] == "chamois"){
            itAnswer +=1;
        }
        else if (names[m] == "concert" && values[m] == "opera"){
            itAnswer +=1;
        }
    }
    if (arAnswer >= 3){
        alert("You should travel to Argentina");
    /*var newPage = "file:///Users/Kelsey/Documents/Web%20Apps%20HW/Git%20Hub/final-project/final-project-maps/argentinamap.html";
    form.setAttribute( "action", newPage );
    }
    else if (saAnswer >=3){
        var newPage = "file:///Users/kelsey/Documents/Web%20Apps%20HW/Git%20Hub/final-project/final-project-maps/africamap.html";
    form.setAttribute( "action", newPage );
    }
    else if (crAnswer >=3){
        var newPage = "file:///Users/kelsey/Documents/Web%20Apps%20HW/Git%20Hub/final-project/final-project-maps/czechrepublicmap.html";
    form.setAttribute( "action", newPage );
    }
    else if (itAnswer >=3){
        var newPage = "file:///Users/kelsey/Documents/Web%20Apps%20HW/Git%20Hub/final-project/final-project-maps/italymap.html";
    form.setAttribute( "action", newPage );
    }
    else{
        var newPage = "file:///Users/Kelsey/Documents/Web%20Apps%20HW/Git%20Hub/final-project/final-project-maps/roadtrip.html";
    form.setAttribute( "action", newPage );
    }*/
    return;
}
