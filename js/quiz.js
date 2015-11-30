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
    var argentinaMsg;
    var africaMsg;
    var pragueMsg;
    var italyMsg;
    var tripMsg;
    
    for (var k=0; k < q.length; k++){
        var a = q[k].split('=');
		names[k] = a[0];
        values[k] = a[1];
    }

    for (var m=0; m < names.length; m++){
        if (names[m] == "food" && values[m] == "chimichurri"){
            argentinaMsg = true;
        }
         if (names[m] == "activity" && values[m] == "hiking"){
            argentinaMsg = true;
        }
         if (names[m] == "animal" && values[m] == "jaguar"){
            argentinaMsg = true;
        }
         if (names[m] == "concert" && values[m] == "tango"){
            argentinaMsg = true;
        }
        else if (names[m] == "food" && values[m] == "bobotie"){
            africaMsg = true;
        }
        else if (names[m] == "activity" && values[m] == "beach"){
            africaMsg = true;
        }
       else if (names[m] == "animal" && values[m] == "elephant"){
            africaMsg = true;
        } 
       else if (names[m] == "concert" && values[m] == "reggae"){
            africaMsg = true;
        }
       else if (names[m] == "food" && values[m] == "veoroknedlozelo"){
            pragueMsg = true;
        } 
        else if (names[m] == "activity" && values[m] == "market"){
            pragueMsg = true;
        }
        else if (names[m] == "animal" && values[m] == "otter"){
            pragueMsg = true;
        }
        else if (names[m] == "concert" && values[m] == "prague"){
            pragueMsg = true;
        }
        else if (names[m] == "food" && values[m] == "linguine"){
            italyMsg = true;
        }
        else if (names[m] == "activity" && values[m] == "museum"){
            italyMsg = true;
        }
        else if (names[m] == "animal" && values[m] == "chamois"){
            italyMsg = true;
        }
        else if (names[m] == "concert" && values[m] == "opera"){
            italyMsg = true;
        }
        
    }
    if (argentinaMsg == true){
        alert("You should travel to Argentina!");
    }
    if (africaMsg == true){
        alert("You should travel to South Africa!");
    }
    if (pragueMsg == true){
        alert("You should travel to Prague!");
    }
    if (italyMsg == true){
        alert("You should travel to Italy!");
    }
    if (tripMsg == true){
        alert("You should go on a roadtrip!");
    }
    return false;
}

