var a = window.document.getElementById('button')
var title = window.document.querySelector('title')
        var vezes = 0
        a.addEventListener('click', clicar)
        a.addEventListener('mouseout', sair)
        a.addEventListener('mouseenter', entrar)

        function clicar(){
            if(vezes == 5)[ 
                a.innerText = 'Pronto',
                vezes = 6,
                a.style.background = 'white',
                a.style.boxShadow = '0px 0px white',
                a.style.color = 'black',
                title.innerText = 'Pronto'
            ]
            a.style.transition = '0.3s'
            if(vezes == 4)[
                a.innerText = 'Serio..?',
                vezes = 5,
                title.innerText = 'Serio..?'
            ]
            if(vezes == 3)[
                a.innerText = 'KK...',
                vezes = 4,
                title.innerText = 'KK...',
            ]
            if(vezes == 2)[
                a.innerText = 'KKKKKK',
                vezes = 3,
                title.innerText = 'KKKKKK'
            ]
            if(vezes == 1)[
                a.innerText = 'KKKK',
                vezes = 2,
                title.innerText = 'KKKK'
            ]
            if(vezes == 0)[
                a.innerText = '*Suspiro*',
                a.style.transform = 'translateY(10px)',
                a.style.boxShadow = '0px 0px rgb(255, 00, 00)',
                a.style.background = 'rgb(253, 17, 17)',
                vezes = 1,
                title.innerText = '*Suspiro*'
            ]
        }
        function sair(){
            a.style.transition = '0.3s'
            if(vezes == 0)[
                a.style.background = 'rgb(253, 79, 79)',
                a.style.boxShadow = '0px 10px rgb(155, 64, 64)',
                a.style.transform = 'translateY(0px)',
                a.innerText = 'Já deu?',
                title.innerText = 'Já deu?'
            ]
            if(vezes == 1)[
                a.style.background = 'rgb(253, 79, 79)',
                a.style.boxShadow = '0px 10px rgb(155, 64, 64)',
                a.innerText = 'Já deu?',
                title.innerText = 'Já deu?'
            ]
        }
        function entrar(){
            a.style.transition = '0.3s'
            if(vezes == 0)[
                a.style.boxShadow = '0px 10px rgb(155, 64, 64)',
                a.style.transform = 'translateY(0px)',
                a.innerText = 'Não ouse...',
                title.innerText = 'Não ouse...',
                a.style.background = 'rgb(254, 59, 59)'
            ]
            if(vezes == 1)[
                a.style.transform = 'translateY(240px)',
                a.innerText = 'Hoje não...',
                title.innerText = 'Hoje não...'
            ]
        }