module.exports = {
    block: 'page',
    title: 'Almax',
    // favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700&amp;subset=cyrillic' },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=PT+Mono' },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: "inner",
                    mix: {block: 'clear'},
                    content: [
                        {
                            block: "logo",
                            tag: "a",
                            attrs: {href: "#"},
                        },
                        {
                            block: "search",
                            content:
                                [
                                    {
                                        elem: "input",
                                        tag: "input",
                                        attrs:  {placeholder: "поиск по сайту"}
                                    },
                                    {
                                        elem: "button",
                                        tag: 'button',
                                        content: "найти"
                                    }
                                ]
                        },
                        {
                            block: "contact",
                            content: [
                                {
                                    elem: "telephone",
                                    tag: "a",
                                    attrs: {href: "tel:+7(495) 988-44-22"},
                                    content: "+7(495) 988-44-22"
                                },
                                {
                                    elem: "call",
                                    content: "Заказать звонок"
                                }
                            ]
                        },
                        {
                            block: "contact",
                            content: [
                                {
                                    elem: "telephone",
                                    tag: "a",
                                    attrs: {href: "tel:"},
                                    content: "8(800) 350-50-20"
                                },
                                {
                                    elem: "call",
                                    content: "info@almakspravo.ru"
                                }
                            ]
                        },
                        {
                            block: "menu",
                            // mix: {block: 'clear'},
                            tag: "ul",
                            content: [
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: {
                                        elem: 'link',
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "О КОМПАНИИ"
                                    }
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: {
                                        elem: 'link',
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "УСЛУГИ"
                                    }
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: {
                                        elem: 'link',
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "НОВОСТИ"
                                    }
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: {
                                        elem: 'link',
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "ПОЛЕЗНАЯ ИНФОРМАЦИЯ"
                                    }
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: {
                                        elem: 'link',
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "КОНТАКТЫ"
                                    }
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            block: "slider",
            js : true,
            content: (function(){
                var result = [];
                for (var i = 0; i < 4; i++) {
                    result.push(
                        {
                            elem : "item",
                            elemMods : {icon : "business"},
                            content : [
                                {
                                    block : 'box',
                                    mods : {template : "style"},
                                    content : [
                                        {
                                            elem : 'box-title',
                                            content : [
                                                {
                                                    elem : 'title',
                                                    elemMods : {color : "white", size : "big"},
                                                    content : 'Представление интересов <br >в арбитражном суде'
                                                },
                                                {
                                                    elem : 'line'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'content',
                                            content : {
                                                block : "short-box",
                                                content : [
                                                    {
                                                        elem : "content",
                                                        content : "Правовая поддержка корпоративных клиентов и предоставление услуг юридического аутсорсинга на выгодных условиях"
                                                    },
                                                    {
                                                        block : "link",
                                                        tag : "a",
                                                        attrs : {href : "#"},
                                                        content : "ПОДРОБНЕЕ"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    );
                }

                return result;
            })()
        },
        {
            block : 'box',
            content : [
                {
                    elem : 'line'
                },
                {
                    elem : 'content',
                    content : "Наша компания действует более 3-х лет на рынке предоставления юридических услуг. Мы ориентированы на малый и средний бизнес, а также на оказание правовой помощи физическим лицам по любым вопросам. Наша миссия: предоставление высококачественных юридических услуг по минимальным ценам за счет исключения непрофильных расходов."
                }
            ]
        },

        {
            block : 'box',
            mods : {template : "style"},
            content : [
                {
                    elem : "box-title",
                    content : [
                        {
                            elem : 'title',
                            content : 'Наши основные услуги'
                        },
                        {
                            elem : 'line'
                        }
                    ]
                },
                {
                    elem : 'content',
                    content : {
                        block: "description",
                        content: [
                            {
                                block : "list",
                                mods : {template : "line"},
                                title : "Для физических лиц",
                                items : [
                                    "Судебные споры",
                                    "Трудовое право",
                                    "Сопровождение сделок",
                                    "Семейное право",
                                    "Административное право",
                                    "Договоры"
                                ]
                            },
                            {
                                block : "list",
                                mods : {template : "line"},
                                title : "Для юридических лиц",
                                items : [
                                    "Представление интересов в суде",
                                    "Корпоративное право",
                                    "Трудовое право",
                                    "Публичное/административное",
                                    "Таможенное право/ВЭД",
                                    "Бухгалтерский учет"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            block : 'paper',
            content : {
                block : 'box',
                mods : {template : 'paper'},
                content : [
                    {
                        elem : 'title',
                        content : 'Наши клиенты'
                    },
                    {
                        elem : 'line'
                    },
                    {
                        elem : 'content',
                        content : {
                            block : 'client',
                            js : true,
                            content : [
                                {
                                    elem : 'item',
                                    tag : 'a',
                                    attrs : {href : "#"},
                                    content : [
                                        {
                                            elem : 'img',
                                            tag : 'img',
                                            attrs : {src : "./img/okapia.png"}
                                        }
                                    ]
                                },
                                {
                                    elem : 'item',
                                    tag : 'a',
                                    attrs : {href : "#"},
                                    content : [
                                        {
                                            elem : 'img',
                                            tag : 'img',
                                            attrs : {src : "./img/okapia.png"}
                                        }
                                    ]
                                },
                                {
                                    elem : 'item',
                                    tag : 'a',
                                    attrs : {href : "#"},
                                    content : [
                                        {
                                            elem : 'img',
                                            tag : 'img',
                                            attrs : {src : "./img/okapia.png"}
                                        }
                                    ]
                                },
                                {
                                    elem : 'item',
                                    tag : 'a',
                                    attrs : {href : "#"},
                                    content : [
                                        {
                                            elem : 'img',
                                            tag : 'img',
                                            attrs : {src : "./img/okapia.png"}
                                        }
                                    ]
                                },
                                {
                                    elem : 'item',
                                    tag : 'a',
                                    attrs : {href : "#"},
                                    content : [
                                        {
                                            elem : 'img',
                                            tag : 'img',
                                            attrs : {src : "./img/okapia.png"}
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            block : 'paper',
            mix : {block : 'question'},
            content : {
                block : 'box',
                content : [
                    {
                        elem : 'title',
                        elemMods : {color : 'white'},
                        content : 'ВОПРОС-ОТВЕТ'
                    },
                    {
                        elem : 'line',
                        elemMods : {color : 'white'}
                    },
                    {
                        elem : 'content',
                        content : {
                            block : 'table',
                            content : [
                                {
                                    elem : "row",
                                    content : [
                                        {
                                            block: "min-box",
                                            mix : {block : 'table', elem : "cell"},
                                            content: [
                                                {
                                                    elem: "title",
                                                    content: "Собственные квартиры мой дом расселяют Обязан ли я платить коммунальные услуги так как дом аварийный?"
                                                },
                                                {
                                                    elem: "content",
                                                    content: [
                                                        {
                                                            elem: "text",
                                                            content: "Действующее в настоящее время законодательство не содержит нормы, которая позволяла бы собственникам и нанимателям жилья в аварийном доме автоматически прекратить внесение платы за содержание и ремонт жилья, равно как и за коммунальные услуги, с момента присвоения дому такого статуса."
                                                        },
                                                        {
                                                            block: "link",
                                                            mods: {color : "green", position : "bottom"},
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "СМОТРЕТЬ ПОЛНОСТЬЮ"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'space'
                                        },
                                        {
                                            block: "min-box",
                                            mix : {block : 'table', elem : "cell"},
                                            content: [
                                                {
                                                    elem: "title",
                                                    content: "Можно ли подать на развод с временным документом,который во время изготовления паспорта заменяет паспорт?"
                                                },
                                                {
                                                    elem: "content",
                                                    content: [
                                                        {
                                                            elem: "text",
                                                            content: "По вопросу временного документа. В соответствии с пунктом 41 Приказом ФМС России от 7 декабря 2009 года № 339 «Об утверждении Административного регламента Федеральной миграционной службы по предоставлению государственной услуги по выдаче, замене и по исполнению государственной функции по учету паспортов гражданина"
                                                        },
                                                        {
                                                            block: "link",
                                                            mods: {color : "green" , position : "bottom"},
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "СМОТРЕТЬ ПОЛНОСТЬЮ"
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
/*        {
            block: "question",
            content: [
                {
                    elem: "title",
                    content: "ВОПРОС-ОТВЕТ"
                },
                {
                    elem: "line"
                },
                {
                    elem: "answer",
                    content: [
                        {
                            elem: "question_text",
                            content: "Собственные квартиры мой дом расселяют Обязан ли я платить коммунальные услуги так как дом аварийный?"
                        },
                        {
                            elem: "answer_text",
                            content: "Действующее в настоящее время законодательство не содержит нормы, которая позволяла бы собственникам и нанимателям жилья в аварийном доме автоматически прекратить внесение платы за содержание и ремонт жилья, равно как и за коммунальные услуги, с момента присвоения дому такого статуса."
                        },
                        {
                            elem: "link",
                            tag: "a",
                            attrs: {href: "#"},
                            content: "СМОТРЕТЬ ПОЛНОСТЬЮ"
                        }
                    ]
                },
                {
                    elem: "answer",
                    content: [
                        {
                            elem: "question_text",
                            content: "Можно ли подать на развод с временным документом,который во время изготовления паспорта заменяет паспорт?"
                        },
                        {
                            elem: "answer_text",
                            content: "По вопросу временного документа. В соответствии с пунктом 41 Приказом ФМС России от 7 декабря 2009 года № 339 «Об утверждении Административного регламента Федеральной миграционной службы по предоставлению государственной услуги по выдаче, замене и по исполнению государственной функции по учету "
                        },
                        {
                            elem: "link",
                            tag: "a",
                            attrs: {href: "#"},
                            content: "СМОТРЕТЬ ПОЛНОСТЬЮ"
                        }
                    ]
                }
            ]
        },*/
        {
            block : 'box',
            mods : {template : "style"},
            content : [
                {
                    elem : "box-title",
                    content : [
                        {
                            elem : 'title',
                            content : 'Отзывы и публикации'
                        },
                        {
                            elem : 'line'
                        }
                    ]
                },
                {
                    elem : 'content',
                    content : [
                        {
                            block: "description",
                            mods: {box: "min"},
                            content: [
                                {
                                    block: "blog",
                                    content: [
                                        {
                                            elem: "date",
                                            elemMods : {size : "big"},
                                            content: "26<br >февраля<br >2016"
                                        },
                                        {
                                            elem: "title",
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Работодатель изменяет условия трудового договора"
                                        },
                                        {
                                            elem: "text",
                                            content: "Работодатель вправе изменить на постоянной основе условия трудового договора по своему усмотрению. Но в каких случаях и в каком порядке? Разберем."
                                        }
                                    ]
                                },
                                {
                                    block: "blog",
                                    content: [
                                        {
                                            elem: "date",
                                            elemMods : {size : "big"},
                                            content: "18<br >января<br >2016"
                                        },
                                        {
                                            elem: "title",
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Знания, накопленные за 17 лет практики, мы собрали в Базе знаний BLS."
                                        },
                                        {
                                            elem: "text",
                                            content: "BLS защищает интересы работодателей в сфере применения трудового законодательства РФ."
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'slider-one',
                            js: true,
                            content: [
                                {
                                    elem: 'item',
                                    tag: 'a',
                                    attrs: {href: "#"},
                                    content: [
                                        {
                                            elem: 'img',
                                            tag: 'img',
                                            attrs: {src: "./img/letter.png"}
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    tag: 'a',
                                    attrs: {href: "#"},
                                    content: [
                                        {
                                            elem: 'img',
                                            tag: 'img',
                                            attrs: {src: "./img/letter.png"}
                                        }
                                    ]
                                },{
                                    elem: 'item',
                                    tag: 'a',
                                    attrs: {href: "#"},
                                    content: [
                                        {
                                            elem: 'img',
                                            tag: 'img',
                                            attrs: {src: "./img/letter.png"}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            block : 'paper',
            content : {
                block : 'box',
                mods : {template : 'paper'},
                content : [
                    {
                        elem : 'title',
                        content : 'НОВОСТИ'
                    },
                    {
                        elem : 'line'
                    },
                    {
                        elem : 'content',
                        content : [
                            {
                                block: "blog",
                                content: [
                                    {
                                        elem: "date",
                                        content: "26 февраля 2016"
                                    },
                                    {
                                        elem: "title",
                                        tag: "a",
                                        attrs: {href: "#"},
                                        content: "Работодатель изменяет условия трудового договора"
                                    },
                                    {
                                        elem: "text",
                                        content: "Работодатель вправе изменить на постоянной основе условия трудового договора по своему усмотрению. Но в каких случаях и в каком порядке? Разберем."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
 /*       {
            block: "news",
            mix: {block: 'clear'},
            content: {
                elem: "inner",
                mix: {block: 'clear'},
                content: [
                    {
                        elem: "title",
                        content: "НОВОСТИ"
                    },
                    {
                        elem: "line"
                    },
                    {
                        block: "blog",
                        mix: {block: 'clear'},
                        content: [
                            {
                                elem: "date",
                                content: "22 августа 2016"
                            },
                            {
                                elem: "title",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Знания, накопленные за 17 лет практики, мы собрали в Базе знаний BLS."
                            },
                            {
                                elem: "text",
                                content: "Работодатель вправе изменить на постоянной основе условия трудового договора по своему усмотрению. Но в каких случаях и в каком порядке? Разберем. В мае 2012 года открыли новое направление &#34;Выдача допусков СРО&#34;, что повлияло на дальнейшее направление развияти компании. В тот же год было "
                            }
                        ]
                    },
                    {
                        block: "blog",
                        mix: {block: 'clear'},
                        content: [
                            {
                                elem: "date",
                                content: "22 августа 2016"
                            },
                            {
                                elem: "title",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Знания, накопленные за 17 лет практики, мы собрали в Базе знаний BLS."
                            },

                        ]
                    }
                ]
            }
        },*/
        {
            block: 'footer',
            mix: {block: 'clear'},
            content: [
                {
                    elem: "logo"
                },
                {
                    elem: "about",
                    tag: "ul",
                    content: [
                        "О НАС",
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "О компании"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Новости"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Статьи"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Отзывы"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Полезная информация"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Контакты"
                            }
                        },
                     ]
                },
                {
                    elem: "about",
                    tag: "ul",
                    content: [
                        "УСЛУГИ",
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Физическим лицам"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Юридическим лицам"
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'link',
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Абонентское обслуживание"
                            }
                        },
                    ]
                },
                {
                    elem: "about",
                    tag: "ul",
                    content: [
                        "Подпишитесь на наши<br>новости",
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'input',
                                tag: "input",
                                attrs:  {placeholder: "Оставьте свой  e-mail адрес"}
                            }
                        },
                        {
                            elem: 'item',
                            tag: 'li',
                            content: {
                                elem: 'button',
                                tag: "button",
                                content: "ПОДПИСАТЬСЯ"
                            }
                        },
                    ]
                },
                {
                    block: "contact",
                    content: [
                        {
                            elem: "telephone",
                            elemMods: {color: "white"},
                            tag: "a",
                            attrs: {href: "tel:+7(495) 988-44-22"},
                            content: "+7(495) 988-44-22"
                        },
                        {
                            elem: "call",
                            content: "Заказать звонок"
                        }
                    ]
                },
                {
                    block: "contact",
                    content: [
                        {
                            elem: "telephone",
                            elemMods: {color: "white"},
                            tag: "a",
                            attrs: {href: "tel:8 (800) 350-50-20"},
                            content: "8 (800) 350-50-20"
                        },
                        {
                            elem: "call",
                            content: "nfo@almakspravo.ru"
                        }
                    ]
                },
            ]
        }
    ]
};
