"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Спільне редагування",
        description:
            "Працюйте разом у реальному часі з вашою командою, клієнтами та зацікавленими сторонами. Співпрацюйте над документами, діліться ідеями та швидко приймайте рішення. Завдяки нашій платформі ви зможете оптимізувати робочий процес і підвищити продуктивність.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Спільне редагування
            </div>
        ),
    },
    {
        title: "Зміни в реальному часі",
        description:
            "Бачте зміни в міру їх появи. З нашою платформою ви можете відстежувати кожну модифікацію в реальному часі. Забудьте про плутанину з останньою версією вашого проєкту. Скажіть прощавай хаосу контролю версій і насолоджуйтеся простотою оновлень в реальному часі.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Контроль версій",
        description:
            "Отримайте оновлення в режимі реального часу та ніколи більше не турбуйтеся про контроль версій. Наша платформа гарантує, що ви завжди працюєте над останньою версією свого проекту, усуваючи потребу в постійних оновленнях вручну. Будьте в курсі, підтримуйте злагодженість своєї команди, і підтримувати потік вашої роботи без будь-яких перерв.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Контроль версій
            </div>
        ),
    },
    {
        title: "Закінчується вміст",
        description:
            "Отримайте оновлення в режимі реального часу та ніколи більше не турбуйтеся про контроль версій. Наша платформа гарантує, що ви завжди працюєте над останньою версією свого проекту, усуваючи потребу в постійних оновленнях вручну. Будьте в курсі, підтримуйте злагодженість своєї команди, і підтримувати потік вашої роботи без будь-яких перерв.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Закінчується вміст
            </div>
        ),
    },
    {
        title: "Закінчується вміст",
        description:
            "Отримуйте оновлення в режимі реального часу та ніколи більше не переймайтеся контролем версій. Наша платформа гарантує, що ви завжди працюєте над найновішою версією свого проекту, усуваючи потребу в постійних оновленнях вручну. Будьте в курсі подій, згуртовуйте свою команду та безперервно виконуйте роботу.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Закінчується вміст
            </div>
        ),
    },
    {
        title: "Закінчується вміст",
        description:
            "Отримуйте оновлення в режимі реального часу та ніколи більше не переймайтеся контролем версій. Наша платформа гарантує, що ви завжди працюєте над найновішою версією свого проекту, усуваючи потребу в постійних оновленнях вручну. Будьте в курсі подій, згуртовуйте свою команду та безперервно виконуйте роботу.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Закінчується вміст
            </div>
        ),
    },
    {
        title: "Закінчується вміст",
        description:
            "Отримайте оновлення в режимі реального часу та ніколи більше не турбуйтеся про контроль версій. Наша платформа гарантує, що ви завжди працюєте над останньою версією свого проекту, усуваючи потребу в постійних оновленнях вручну. Будьте в курсі, підтримуйте злагодженість своєї команди, і підтримувати потік вашої роботи без будь-яких перерв.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Закінчується вміст
            </div>
        ),
    },
];


function WhyChooseUs() {
    return (
        <>
            <div>
                <StickyScroll content={content}></StickyScroll>
            </div>
        </>
    )
}

export default WhyChooseUs;
