'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";


const featuredWebinars = [
    {
        title: 'Розуміння теорії музики',
        description:
            'Зануртеся в основи музичної теорії та вдосконалюйте свої музичні навички.',
        slug: 'розуміння-музичної-теорії',
        isFeatured: true,
    },
    {
        title: 'Мистецтво написання пісень',
        description:
            'Вчіться майстерності написання пісень у досвідчених музикантів та авторів пісень.',
        slug: 'мистецтво-написання-пісень',
        isFeatured: true,
    },
    {
        title: 'Оволодіння своїм інструментом',
        description:
            'Просунуті техніки для оволодіння музичним інструментом на ваш вибір.',
        slug: 'оволодіння-інструментом',
        isFeatured: true,
    },
    {
        title: 'Основи музичного продакшну',
        description:
            'Почніть займатися музичним продакшеном з цього вичерпного огляду.',
        slug: 'музична продакшн-сучасність',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Техніки живого виконання',
        description:
            'Вдосконалюйте свої навички виступів наживо за допомогою порад та стратегій від експертів.',
        slug: 'техніки живого перформансу',
        isFeatured: true,
    },
    {
        title: 'Цифровий музичний маркетинг',
        description:
            'Дізнайтеся, як ефективно просувати свою музику в цифрову епоху.',
        slug: 'цифровий-музичний-маркетинг',
        isFeatured: true,
    },
];

function UpcomingWebinars() {
    return (

            <div className=' dark:bg-dot-white/[0.2]'>
        <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >

         

            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='test-case text-teal-600 font-semibold tracking-wide uppercase'>ВИБРАНІ ВЕБІНАРИ</h2>
                    <p className='mt-2 text-3xl leading-8 font-ectrabold tracking-tight text-white'>Покращте музичну подорож</p>
                </div>

                <div className='mt-10'>
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: '/'
                            }
                        ))}
                    />
                </div>


                <div className='mt-10 text-center'>
                    <Link href={'/'}> <Button borderRadius="1.75rem"
             className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Переглянути всі вебінари</Button></Link>
                </div>
            </div>

        </motion.div>
    </AuroraBackground>
        </div>
    )
}

export default UpcomingWebinars
