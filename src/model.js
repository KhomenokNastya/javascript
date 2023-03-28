import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `
Осваиваю frontend-разработку. Создаю динамические сайты с нуля. Изучаю адаптивную, кроссбраузерную верстку, препроцессоры CSS, JavaScript, DOM, фреймворки: React, Vue, Angular, базы данных SQL, хочу залезть в backend
`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #718c3a, #4a5322)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
            'text-transform': 'uppercase',
            'justify-content': 'center'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '1rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
            'border-radius': '5%'
        },
        alt: 'Это картинка'
    }),

    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Реализованные принципы работы SOLID и ООП в одном проекте',
        'Javascript - это просто, интересно. Любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #383838, #382f29)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),

    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #e2e3e2, #e9ebea)',
            padding: '1rem',
            'font-weight': 'solid'
        }
    })
]