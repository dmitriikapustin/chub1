function magic(el) {
    if (el) {
        let tmp = document.createElement('p')
        tmp = el.cloneNode(true)
        tmp.style.width = el.offsetWidth - 69 + 'px'
        tmp.style.position = 'absolute'
        tmp.style.left = '-2000px'
        tmp.innerHTML = 'foo'
        document.body.appendChild(tmp)
    
        let content = el.textContent.split(''),
            oneLineHeight = tmp.scrollHeight,
            lines = [],
            i = 0
    
        while (i < content.length) {
            let line = tmp.innerHTML = ''
            while (i < content.length && tmp.scrollHeight <= oneLineHeight) {
                tmp.innerHTML = line += content[i++]
            }
            let lineEndIndex = i === content.length ? i : line.lastIndexOf(' ') + 1
            lines.push(content.splice(0, lineEndIndex).join(''))
            i = 0
        }
        tmp.remove()
        el.innerHTML = lines.map(line => '<span class="ov-hidden"><span>' + line + '</span></span>').join('')
    
        //console.log(lines)
    }
}

$('p').each(function() {
    if ( $(this).hasClass("small-text")) {
        magic(document.querySelector('p.small-text:nth-child(1)'))
        magic(document.querySelector('p.small-text:nth-child(2)'))
        magic(document.querySelector('p.small-text:nth-child(3)'))
        magic(document.querySelector('p.small-text:nth-child(4)'))
        magic(document.querySelector('p.small-text:nth-child(5)'))
    }
    if ( $(this).hasClass("animated-paragraph_item")) {
        magic(document.querySelector('p.animated-paragraph_item:nth-child(1)'))
        magic(document.querySelector('p.animated-paragraph_item:nth-child(2)'))
        magic(document.querySelector('p.animated-paragraph_item:nth-child(3)'))
        magic(document.querySelector('p.animated-paragraph_item:nth-child(4)'))
        magic(document.querySelector('p.animated-paragraph_item:nth-child(5)'))
    }
    if ( $(this).hasClass("animated-paragraph_item_no-scroll_2")) {
        magic(document.querySelector('p.animated-paragraph_item_no-scroll_2'))
    }
    
});

