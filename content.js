console.log('content is running')


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(status, sender, sendResponse) {
    if (status === true) {

        let divs = document.getElementsByTagName('div');
        let ul = document.getElementsByTagName('ul');
        let li = document.getElementsByTagName('li');
        let table = document.getElementsByTagName('table');
        // let li = document.getElementsByTagName('li');

        // Texts
        let span = document.getElementsByTagName('span');
        let p = document.getElementsByTagName('p');
        let a = document.getElementsByTagName('a');
        let h1 = document.getElementsByTagName('h1');
        let h2 = document.getElementsByTagName('h2');
        let h3 = document.getElementsByTagName('h3');
        let h4 = document.getElementsByTagName('h4');
        let input = document.getElementsByTagName('input');

        // main
        let body = document.getElementsByTagName('body');
        

        for (elt of divs) {
            elt.style['background-color'] = "#262626";
            elt.style['color'] = "rgba(255,255,255)";
            // elt.style['color'] = "#DBDBDB";
        }

        for (elt of span) {
            elt.style['color'] = "#DBDBDB";
        }

        for (elt of p) {
            elt.style['color'] = "#DBDBDB";
        }

        for (elt of a) {
            elt.style['color'] = "#a3f7bf";
            elt.style['background-color'] = "#262626";
        }

        for (elt of h1) {
            elt.style['color'] = "#DBDBDB";
        }
        for (elt of h2) {
            elt.style['color'] = "#DBDBDB";
        }
        for (elt of h3) {
            elt.style['color'] = "#DBDBDB";
        }
        for (elt of h4) {
            elt.style['color'] = "#DBDBDB";
        }

        for (elt of ul) {
            elt.style['color'] = "#DBDBDB";
            elt.style['background-color'] = "#262626";
        }

        for (elt of li) {
            elt.style['color'] = "#DBDBDB";
            elt.style['background-color'] = "#262626";
        }

        for (elt of table) {
            elt.style['color'] = "#DBDBDB";
            elt.style['background-color'] = "#262626";
        }

        for (elt of body) {
            elt.style['color'] = "#DBDBDB";
            elt.style['background-color'] = "#262626";
        }

        for (elt of input) {
            elt.style['color'] = "#DBDBDB";
        }

        // google
        let cite = document.getElementsByTagName('cite');
        let em = document.getElementsByTagName('em');
        let SDkEP = document.querySelectorAll('div.SDkEP'); //search bar part is black
        let iblpc = document.querySelectorAll('div.iblpc');
        let gNO89b = document.querySelectorAll('input.gNO89b');
        let RNmpXc = document.querySelectorAll('input.RNmpXc');
        let sbl1 = document.querySelectorAll('div.sbl1');
        

        for (elt of cite) {
            elt.style['color'] = "rgba(255,255,255)";
            // elt.style['background-color'] = "#262626";
        }
        for (elt of em) {
            elt.style['color'] = "#29a19c";
        }

        for (elt of SDkEP) {
            elt.style['background-color'] = "";
        }
        for (elt of iblpc) {
            elt.style['background-color'] = "";
        }
        for (elt of gNO89b) {
            elt.style['color'] = "#262626";
        }
        for (elt of RNmpXc) {
            elt.style['color'] = "#262626";
        }
        for (elt of sbl1) {
            elt.style['color'] = "rgba(255,255,255)";
        }
        // google

        var x = document.querySelectorAll("li.selected");
        for (tag of x) {
            selectedA = tag.getElementsByTagName('a')
            selectedA[0].style.backgroundColor = 'rgba(250, 250, 250, 0.1)';
        }


    }
}
