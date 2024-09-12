'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        'Приєднання до музичної школи повністю змінило моє розуміння музики та допомогло мені по-справжньому відкрити власне звучання. Викладачі — на світовому рівні!',
      name: 'Алекс Джонсон',
      title: 'Студент гри на гітарі',
    },
    {
      quote:
        "Спільнота та підтримка в цій школі не мають рівних. Я виріс не тільки як піаніст, але й як виконавець, завдяки їхньому всебічному підходу.",
      name: 'Саманта Лі ',
      title: 'Студентка гри на піаніно',
    },
    {
      quote:
        "Ця школа надала мені інструменти та впевненість, щоб вивести свій спів на новий рівень. Я безмежно вдячний за індивідуальний коучинг.",
      name: 'Майкл Чен',
      title: 'Студент вокалу',
    },
    {
      quote:
        'Як скрипаль, знайти правильного наставника може бути складно, але ця школа знайшла для мене вчителя, який справді розуміє мої цілі та труднощі.',
      name: 'Емілі Тейлор',
      title: 'Студентка гри на скрипці',
    },
    {
      quote:
        'Курси з продюсування музики тут відкрили мені очі на всі тонкощі музичного продюсування. Щиро рекомендую всім, хто мріє стати продюсером!',
      name: 'Кріс Моралес',
      title: 'Студент музичного продюсування',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
         <h2 className='text-4xl font-bold text-center mb-8 z-10'>Послухайте нашу гармонію: Голоси успіху</h2>
         <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 mt-10'>
            <div className='w-full max-w-6xl'>
            <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
      />
            </div>
         </div>
    </div>
  )
}

export default MusicSchoolTestimonials
