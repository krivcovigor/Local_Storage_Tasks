function visitLink(path) {
	
    if(localStorage.length == 0) {
        localStorage.setItem('Page1', '0');
        localStorage.setItem('Page2', '0');
        localStorage.setItem('Page3', '0');
    }
    let zero = parseInt(localStorage.getItem(path));
    if(path === 'Page1') {
        localStorage.setItem('Page1', (parseInt(zero) + 1));
    }else if(path === 'Page2') {
        localStorage.setItem('Page2', (parseInt(zero) + 1));
    }else if(path === 'Page3') {
        localStorage.setItem('Page3', (parseInt(zero) + 1));
    }
	
}

function viewResults() {
    let content = document.getElementById('content');

    let ul = document.createElement('ul');
    content.append(ul);
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    li1.append(`You visited Page1 ${localStorage.getItem('Page1')} time(s)`);
    li2.append(`You visited Page2 ${localStorage.getItem('Page2')} time(s)`);
    li3.append(`You visited Page3 ${localStorage.getItem('Page3')} time(s)`);
    ul.append(li1, li2, li3);
    localStorage.clear();
}