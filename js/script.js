// js/script.js

const translations = {
    en: {
        heroTitle: "Welcome to my Architecture Portfolio",
        heroSub: "Explore my works and concepts",
        btnSeeProjects: "See Projects",
        aboutTitle: "About Me",
        aboutText: "I am Andréina Lopes, an architect graduated from the Universidade Nove de Julho (Brazil) and currently pursuing an MBA in Project Management at USP/Esalq (Brazil). I am passionate about transforming ideas into functional and inspiring spaces, combining creativity, technical precision, and sensitivity in every detail.<p>During my experience at Arcos Dorados (McDonald’s), I worked on store layout development, ensuring functionality, brand identity, and compliance with design guidelines. I also collaborated in project management, schedule monitoring, and site visits to oversee renovations, gaining practical experience in coordination and execution.<p>My academic background provided me with a solid foundation in architectural design, urban planning, environmental comfort, and 3D modeling, with proficiency in tools such as AutoCAD, Revit, SketchUp, and Lumion. With intermediate proficiency in English and Spanish, I am well-prepared to collaborate in multicultural and multidisciplinary teams.",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        contactText: "Send me a message or connect via social networks",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",

        // cards na home
        projects: [
            { title: "Cultural Center for the Restoration of Buildings and Urban Sites.", desc: "Concept description..." },
            { title: "Contemporary residence - Portal dos Ipês", desc: "Concept description..." },
            { title: "Multifunctional Building Saracura", desc: "Concept description..." },
            { title: "Contemporary Residential Complex", desc: "Concept description..." },
            { title: "Ephemeral Architecture – Vale do Anhangabaú", desc: "Concept description..." },
            { title: "Single-family Residence – Vila Toscana", desc: "Concept description..." },
            { title: "Intermodal Terminal – Metro Line 22", desc: "Concept description..." },
            { title: "Facade Renovation with Contemporary Language", desc: "Concept description..." },
            { title: "Vivara Flagship – Interior Architecture", desc: "Concept description..." },
            { title: "Contemporary Residence – Mais Viver", desc: "Concept description..." },
            { title: "Farm Store Flagship", desc: "Concept description..." },
            { title: "Contemporary Residence on Sloped Terrain", desc: "Concept description..." },
            { title: "Sustainable Gastronomic Center", desc: "Concept description..." },
        ],

        // project pages
        projectPages: {
            project1: {
                title: "Cultural Center for the Restoration of Buildings and Urban Sites",
                desc: "This academic project was developed with the goal of restoring and revitalizing an old building located in Mooca, São Paulo. The proposal combines the preservation of historical heritage with the creation of a contemporary annex featuring bold and innovative design. The new structure, made of steel and glass, contrasts yet harmoniously interacts with the original exposed-brick architecture. The solution blends functionality, environmental comfort, and aesthetics, enhancing the urban space while meeting modern building-use demands.",
                year: "Year: ",
                location: "Location: Mooca - São Paulo, Brazil",
                area: "Built area: 8,539.48 m²",
                software: "Software: —"
            },
            project2: {
                title: "Contemporary residence - Portal dos Ipês",
                desc: "Contemporary residence on a corner lot located in Portal dos Ipês, Cajamar, with a layout designed to enhance the volumetry and integration with the landscaping. Highlights include the double-height ceiling with a glass façade, which adds grandeur and lightness to the main entrance, and the overlapping volumes with contrasting textures: wood, concrete, and marble finishes—elements that reinforce the contemporary identity of the project. Project developed in partnership with @arq__bruno and the office @robsonribeiro.arq.",
                year: "Year: ",
                location: "Location: Cajamar - São Paulo, Brazil",
                area: "Built area: — m²",
                software: "Software: —"
            },
            project3: {
                title: "Multifunctional Building Saracura",
                desc: "Sustainable multifunctional building focused on energy efficiency and urban integration. Features high thermal retention materials, double glazing, solar panels, HVAC, water reuse, green roof, and native landscaping, ensuring comfort, flexibility, and ecological sustainability.",
                year: "Year: ",
                location: "Location: Bela Vista - São Paulo, Brazil",
                area: "Built area: 2,406 m²",
                software: "Software: —"
            },
            project4: {
                title: "Contemporary Residential Complex",
                desc: "Contemporary residential complex in Portal dos Ipes, Cajamar. Strategically positioned houses optimize terrain usage with symmetrical volumes, recessed balconies with volumetric frames, cement finish, glass railings, and subtle lighting, reinforcing minimalism and functionality.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: — ",
                software: "Software: —"
            },
            project5: {
                title: "Ephemeral Architecture – Vale do Anhangabaú",
                desc: "Temporary exhibition space inspired by the 1922 Modern Art Week. Promotes interaction between visitors and exhibits using overlapping structures and organic roofs. Emphasis on sustainability, aesthetics, and material reuse aligned with contemporary art trends.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project6: {
                title: "Single-family Residence – Vila Toscana",
                desc: "Contemporary residence with clean lines, defined volumes, and balanced composition. Highlights include symmetry, double-height glass, volumetric framing, cement finish, glass railings, and integrated lighting emphasizing minimalism and sophistication.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project7: {
                title: "Intermodal Terminal – Metro Line 22",
                desc: "Modern terminal with wooden structure, glass façade, UHPC concrete elements, green design, accessibility, and dynamic volumes. Integrates functionality, aesthetics, and sustainability principles.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project8: {
                title: "Facade Renovation with Contemporary Language",
                desc: "Contemporary facade redesign emphasizing existing volumes, wood textures, lighting, vertical glass panels, and landscaping. Achieves elegance, functionality, and harmonious integration with surroundings.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project9: {
                title: "Vivara Flagship – Interior Architecture",
                desc: "Luxury jewelry store highlighting brand identity, microenvironments, and customer experience. Features wood furniture, salmon tones, and strategic lighting to showcase products and enhance comfort.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project10: {
                title: "Contemporary Residence – Mais Viver",
                desc: "Elegant residence at Mais Viver, Cajamar, with clean lines, cantilevered canopy, glass railings, vertical lighting, and modern gate. Plays with light and shadow, conveying sophistication and functionality.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project11: {
                title: "Farm Store Flagship",
                desc: "Retail store with boho aesthetics, brand-focused lighting, and product highlights. Emphasizes client comfort and the vibrant, beach-inspired identity of FARM.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project12: {
                title: "Contemporary Residence on Sloped Terrain",
                desc: "Residence on inclined terrain highlighting relief and volumetry. Features defined volumes, contrasting textures, and integration with surroundings using concrete, glass, and neutral tones.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            },
            project13: {
                title: "Sustainable Gastronomic Center",
                desc: "Urban gastronomic center in Barra Funda, São Paulo. Features vertical farm, ecological practices, educational spaces, public plazas, accessibility, natural lighting, and certified MLC wood, promoting sustainability, environmental education, and community integration.",
                year: "Year: ",
                location: "Location: ",
                area: "Built area: ",
                software: "Software: "
            }
        }
    },

    // -----------------------------------------------------
    es: {
        heroTitle: "Bienvenido a mi Portafolio de Arquitectura",
        heroSub: "Explora mis trabajos y conceptos",
        btnSeeProjects: "Ver Proyectos",
        aboutTitle: "Sobre mí",
        aboutText: "Soy Andréina Lopes, arquitecta graduada en la Universidade Nove de Julho (Brasil) y actualmente cursando un MBA en Gestión de Proyectos en la USP/Esalq (Brasil). Me apasiona transformar ideas en espacios funcionales e inspiradores, combinando creatividad, precisión técnica y sensibilidad en cada detalle. Durante mi experiencia en Arcos Dorados (McDonald’s), trabajé en el desarrollo de layouts de tiendas, garantizando la funcionalidad, la identidad de la marca y el cumplimiento de las directrices de diseño. También colaboré en la gestión de proyectos, el seguimiento de cronogramas y visitas a obra para supervisar remodelaciones, adquiriendo experiencia práctica en coordinación y ejecución. Mi formación académica me brindó una base sólida en diseño arquitectónico, urbanismo, confort ambiental y modelado 3D, con dominio de herramientas como AutoCAD, Revit, SketchUp y Lumion. Con un nivel intermedio de inglés y español, estoy bien preparada para colaborar en equipos multiculturales y multidisciplinarios.",
        projectsTitle: "Proyectos",
        contactTitle: "Contacto",
        contactText: "Envíame un mensaje o conéctate por redes sociales",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navContact: "Contacto",

        projects: [
            { title: "Centro Cultural de Restauración de Edificios y Sitios Urbanos.", desc: "Descripción del concepto..." },
            { title: "Residencia contemporánea - Portal dos Ipês", desc: "Descripción del concepto..." },
            { title: "Edificio Multifuncional Saracura", desc: "Descripción del concepto..." },
            { title: "Conjunto Residencial Contemporáneo", desc: "Descripción del concepto..." },
            { title: "Arquitectura Efímera – Vale do Anhangabaú", desc: "Descripción del concepto..." },
            { title: "Residencia Unifamiliar – Vila Toscana", desc: "Descripción del concepto..." },
            { title: "Terminal Intermodal – Línea 22 del Metro", desc: "Descripción del concepto..." },
            { title: "Renovación de Fachada con Lenguaje Contemporáneo", desc: "Descripción del concepto..." },
            { title: "Flagship Vivara – Arquitectura de Interiores", desc: "Descripción del concepto..." },
            { title: "Residencia Contemporánea – Mais Viver", desc: "Descripción del concepto..." },
            { title: "Tienda Insignia Farm", desc: "Descripción del concepto..." },
            { title: "Residencia Contemporánea en Terreno Inclinado", desc: "Descripción del concepto..." },
            { title: "Centro Gastronómico Sostenible", desc: "Descripción del concepto..." }
        ],

        projectPages: {
            project1: {
                title: "Centro Cultural de Restauración de Edificios y Sitios Urbanos",
                desc: "Este proyecto académico fue desarrollado con el objetivo de restaurar y revitalizar un antiguo edificio ubicado en Mooca, São Paulo. La propuesta combina la preservación del patrimonio histórico con la creación de un anexo contemporáneo de diseño audaz e innovador. La nueva estructura, de acero y vidrio, contrasta y dialoga armoniosamente con la arquitectura original de ladrillo expuesto. La solución integra funcionalidad, confort ambiental y estética, valorizando el espacio urbano y atendiendo a las demandas contemporáneas de uso del edificio.",
                year: "Año: ",
                location: "Ubicación",
                area: "Área construida: ",
                software: "Software: "
            },
            project2: {
                title: "Residencia contemporánea - Portal dos Ipês",
                desc: "Residencia contemporánea en un terreno en esquina ubicado en Portal dos Ipês, Cajamar, con un diseño pensado para resaltar la volumetría y la integración con el paisajismo. Destacan el techo de doble altura con fachada de vidrio, que aporta imponencia y ligereza al acceso principal, y los volúmenes superpuestos con texturas contrastantes: madera, concreto y revestimientos marmorizados, elementos que refuerzan la identidad contemporánea del proyecto. Proyecto desarrollado en colaboración con @arq__bruno y la oficina @robsonribeiro.arq.",
                year: "Año: ",
                location: "Ubicación: Cajamar - São Paulo, Brasil",
                area: "Área construida: ",
                software: "Software: —"
            },
            project3: {
                title: "Edificio Multifuncional Saracura",
                desc: "Edificio multifuncional sostenible enfocado en la eficiencia energética y la integración urbana. Presenta materiales de alta retención térmica, vidrios dobles, paneles solares, HVAC, reutilización de agua, cubierta verde y paisajismo con especies nativas, garantizando confort, flexibilidad y sostenibilidad ecológica.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project4: {
                title: "Conjunto Residencial Contemporáneo",
                desc: "Conjunto residencial contemporáneo en Portal dos Ipês, Cajamar. Las viviendas están estratégicamente posicionadas para optimizar el terreno, con volúmenes simétricos, balcones retranqueados con marcos volumétricos, acabado en cemento, barandales de vidrio e iluminación sutil, reforzando el minimalismo y la funcionalidad.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project5: {
                title: "Arquitectura Efímera – Vale do Anhangabaú",
                desc: "Espacio de exposición temporal inspirado en la Semana de Arte Moderno de 1922. Promueve la interacción entre visitantes y obras a través de estructuras superpuestas y cubiertas orgánicas. Énfasis en sostenibilidad, estética y reutilización de materiales, en línea con las tendencias contemporáneas de arte.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project6: {
                title: "Residencia Unifamiliar – Vila Toscana",
                desc: "Residencia contemporánea con líneas limpias, volúmenes definidos y composición equilibrada. Destacan la simetría, el vidrio de doble altura, los marcos volumétricos, el acabado en cemento, los barandales de vidrio y la iluminación integrada que refuerzan el minimalismo y la sofisticación.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project7: {
                title: "Terminal Intermodal – Línea 22 del Metro",
                desc: "Terminal moderno con estructura de madera, fachada de vidrio, elementos de hormigón UHPC, diseño verde, accesibilidad y volúmenes dinámicos. Integra funcionalidad, estética y principios de sostenibilidad.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project8: {
                title: "Renovación de Fachada con Lenguaje Contemporáneo",
                desc: "Rediseño contemporáneo de fachada, destacando volúmenes existentes, texturas de madera, iluminación, paneles verticales de vidrio y paisajismo. Logra elegancia, funcionalidad e integración armónica con el entorno.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project9: {
                title: "Flagship Vivara – Arquitectura de Interiores",
                desc: "Joyería de lujo que resalta la identidad de la marca, microambientes y experiencia del cliente. Presenta mobiliario de madera, tonos salmón e iluminación estratégica para destacar productos y mejorar el confort.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project10: {
                title: "Residencia Contemporánea – Mais Viver",
                desc: "Residencia elegante en Mais Viver, Cajamar, con líneas limpias, marquesina en voladizo, barandales de vidrio, iluminación vertical y portón moderno. Juega con la luz y la sombra, transmitiendo sofisticación y funcionalidad.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project11: {
                title: "Tienda Insignia Farm",
                desc: "Tienda minorista con estética boho, iluminación enfocada en la marca y exhibición de productos. Enfatiza el confort del cliente y la identidad vibrante e inspirada en la playa de FARM.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project12: {
                title: "Residencia Contemporánea en Terreno Inclinado",
                desc: "Residencia en terreno inclinado que destaca el relieve y la volumetría. Presenta volúmenes definidos, texturas en contraste e integración con el entorno mediante el uso de hormigón, vidrio y tonos neutros.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            },
            project13: {
                title: "Centro Gastronómico Sostenible",
                desc: "Centro gastronómico urbano en Barra Funda, São Paulo. Incluye huerto vertical, prácticas ecológicas, espacios educativos, plazas públicas, accesibilidad, iluminación natural y madera MLC certificada, promoviendo sostenibilidad, educación ambiental e integración comunitaria.",
                year: "Año: ",
                location: "Ubicación: ",
                area: "Área construida: ",
                software: "Software: "
            }
        }
    },

    // -----------------------------------------------------
    pt: {
        heroTitle: "Bem-vindo ao meu Portfólio de Arquitetura",
        heroSub: "Explore meus trabalhos e conceitos",
        btnSeeProjects: "Ver Projetos",
        aboutTitle: "Sobre mim",
        aboutText: "Sou Andréina Lopes, arquiteta formada pela Universidade Nove de Julho (Brasil) e atualmente cursando MBA em Gestão de Projetos na USP/Esalq (Brasil). Sou apaixonada por transformar ideias em espaços funcionais e inspiradores, unindo criatividade, precisão técnica e sensibilidade em cada detalhe. Durante minha experiência na Arcos Dorados (McDonald’s), atuei no desenvolvimento de layouts de lojas, garantindo funcionalidade, identidade da marca e conformidade com as diretrizes de design. Também colaborei na gestão de projetos, acompanhamento de cronogramas e visitas a obras para supervisionar reformas, adquirindo experiência prática em coordenação e execução. Minha formação acadêmica me proporcionou uma base sólida em projeto arquitetônico, urbanismo, conforto ambiental e modelagem 3D, com domínio de ferramentas como AutoCAD, Revit, SketchUp e Lumion. Com nível intermediário em inglês e espanhol, estou bem preparada para colaborar em equipes multiculturais e multidisciplinares.",
        projectsTitle: "Projetos",
        contactTitle: "Contato",
        contactText: "Envie-me uma mensagem ou conecte-se pelas redes sociais",
        navAbout: "Sobre mim",
        navProjects: "Projetos",
        navContact: "Contato",

        projects: [
            { title: "Centro Cultural para a Restauração de Edifícios e Sítios Urbanos", desc: "Descrição do conceito..." },
            { title: "Residência contemporânea - Portal dos Ipês", desc: "Descrição do conceito..." },
            { title: "Edifício Multifuncional Saracura", desc: "Descrição do conceito..." },
            { title: "Conjunto Residencial Contemporâneo", desc: "Descrição do conceito..." },
            { title: "Arquitetura Efêmera – Vale do Anhangabaú", desc: "Descrição do conceito..." },
            { title: "Residência Unifamiliar – Vila Toscana", desc: "Descrição do conceito..." },
            { title: "Terminal Intermodal – Linha 22 do Metrô", desc: "Descrição do conceito..." },
            { title: "Reforma de Fachada com Linguagem Contemporânea", desc: "Descrição do conceito..." },
            { title: "Flagship Vivara – Arquitetura de Interiores", desc: "Descrição do conceito..." },
            { title: "Residência Contemporânea – Mais Viver", desc: "Descrição do conceito..." },
            { title: "Loja Insígnia FARM", desc: "Descrição do conceito..." },
            { title: "Residência Contemporânea em Terreno em Declive", desc: "Descrição do conceito..." },
            { title: "Centro Gastronômico Sustentável", desc: "Descrição do conceito..." }
        ],

        projectPages: {
            project1: {
                title: "Centro Cultural para a Restauração de Edifícios e Sítios Urbanos",
                desc: "Este projeto acadêmico foi desenvolvido com o objetivo de restaurar e revitalizar um edifício antigo localizado na Mooca, São Paulo. A proposta combina a preservação do patrimônio histórico com a criação de um anexo contemporâneo de design arrojado e inovador. A nova estrutura, em aço e vidro, contrasta e dialoga harmonicamente com a arquitetura original em tijolo aparente. A solução alia funcionalidade, conforto ambiental e estética, valorizando o espaço urbano e atendendo às demandas contemporâneas de uso do edifício.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project2: {
                title: "Residência contemporânea - Portal dos Ipês",
                desc: "Residência contemporânea em terreno de esquina localizado no Portal dos Ipes em Cajamar, com implantação pensada para valorizar a volumetria e a integração com o paisagismo. Destaque para o pé-direito duplo com fachada em vidro, que traz imponência e leveza ao acesso principal, e para os volumes sobrepostos com texturas contrastantes: madeira, concreto e revestimentos marmorizados, elementos que reforçam a identidade contemporânea do projeto. Projeto desenvolvido em parceria com o @arq__bruno e o escritório @robsonribeiro.arq",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project3: {
                title: "Edifício Multifuncional Saracura",
                desc: "Edifício multifuncional sustentável focado em eficiência energética e integração urbana. Conta com materiais de alta retenção térmica, vidros duplos, painéis solares, HVAC, reúso de água, cobertura verde e paisagismo com espécies nativas, garantindo conforto, flexibilidade e sustentabilidade ecológica.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project4: {
                title: "Conjunto Residencial Contemporâneo",
                desc: "Conjunto residencial contemporâneo no Portal dos Ipês, Cajamar. As casas foram posicionadas estrategicamente para otimizar o terreno, com volumes simétricos, varandas recuadas com caixilhos volumétricos, acabamento em cimento, guarda-corpos de vidro e iluminação sutil, reforçando o minimalismo e a funcionalidade.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project5: {
                title: "Arquitetura Efêmera – Vale do Anhangabaú",
                desc: "Espaço expositivo temporário inspirado na Semana de Arte Moderna de 1922. Promove a interação entre visitantes e obras por meio de estruturas sobrepostas e coberturas orgânicas. Ênfase em sustentabilidade, estética e reaproveitamento de materiais, alinhado às tendências contemporâneas de arte.",
                year: "Ano: 2022",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project6: {
                title: "Residência Unifamiliar – Vila Toscana",
                desc: "Residência contemporânea com linhas limpas, volumes bem definidos e composição equilibrada. Destaques: simetria, vidro em pé-direito duplo, caixilhos volumétricos, acabamento em cimento, guarda-corpos de vidro e iluminação integrada que realçam o minimalismo e a sofisticação.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project7: {
                title: "Terminal Intermodal – Linha 22 do Metrô",
                desc: "Terminal moderno com estrutura em madeira, fachada de vidro, elementos em concreto UHPC, desenho com enfoque verde, acessibilidade e volumes dinâmicos. Integra funcionalidade, estética e princípios de sustentabilidade.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project8: {
                title: "Reforma de Fachada com Linguagem Contemporânea",
                desc: "Redesign contemporâneo de fachada, valorizando volumes existentes, texturas em madeira, iluminação, painéis verticais de vidro e paisagismo. A proposta busca elegância, funcionalidade e integração harmônica com o entorno.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project9: {
                title: "Flagship Vivara – Arquitetura de Interiores",
                desc: "Loja de joias de alto padrão que ressalta a identidade da marca, microambientes e a experiência do cliente. Conta com mobiliário em madeira, tons salmão e iluminação estratégica para valorizar os produtos e aumentar o conforto.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project10: {
                title: "Residência Contemporânea – Mais Viver",
                desc: "Residência elegante no empreendimento Mais Viver, Cajamar, com linhas limpas, marquise em balanço, guarda-corpos de vidro, iluminação vertical e portão moderno. Brinca com luz e sombra, transmitindo sofisticação e funcionalidade.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project11: {
                title: "Loja Insígnia FARM",
                desc: "Loja de varejo com estética boho, iluminação voltada para a identidade da marca e destaque de produtos. Valoriza o conforto do cliente e a identidade vibrante, inspirada no universo praiano da FARM.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project12: {
                title: "Residência Contemporânea em Terreno em Declive",
                desc: "Residência em terreno inclinado que valoriza o relevo e a volumetria. Apresenta volumes bem definidos, contrastes de texturas e integração com o entorno através do uso de concreto, vidro e paleta de tons neutros.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            },
            project13: {
                title: "Centro Gastronômico Sustentável",
                desc: "Centro gastronômico urbano em Barra Funda, São Paulo. Propõe fazenda vertical, práticas ecológicas, espaços educativos, praças públicas, acessibilidade, iluminação natural e uso de madeira MLC certificada, promovendo sustentabilidade, educação ambiental e integração comunitária.",
                year: "Ano: ",
                location: "Local: ",
                area: "Área construída: ",
                software: "Softwares: "
            }
        }
    }
};

// Funções seguras
function safeSet(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function safeSetHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// Alterar idioma
function setLanguage(lang) {
    if (!translations[lang]) lang = 'pt';
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
    const t = translations[lang];

    // Página principal
    safeSet('hero-title', t.heroTitle);
    safeSet('hero-sub', t.heroSub);
    safeSet('btn-see-projects', t.btnSeeProjects);
    safeSet('about-title', t.aboutTitle);
    safeSetHTML('about-text', t.aboutText);
    safeSet('projects-title', t.projectsTitle);
    safeSet('contact-title', t.contactTitle);
    safeSet('contact-text', t.contactText);
    safeSet('nav-about', t.navAbout);
    safeSet('nav-projects', t.navProjects);
    safeSet('nav-contact', t.navContact);

    // Cards da home
    const projectCards = document.querySelectorAll(".project-grid .card");
    if (t.projects && projectCards.length) {
        projectCards.forEach((card, i) => {
            const titleEl = card.querySelector("h3");
            const descEl = card.querySelector("p");
            if (t.projects[i]) {
                if (titleEl) titleEl.textContent = t.projects[i].title;
                if (descEl) descEl.textContent = t.projects[i].desc;
            }
        });
    }

    // 🔹 Detectar página de projeto atual
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    if (t.projectPages && t.projectPages[currentPage]) {
        const p = t.projectPages[currentPage];
        safeSet('project-title', p.title);
        safeSet('project-desc', p.desc);
        safeSet('year-label', p.year);
        safeSet('location-label', p.location);
        safeSet('area-label', p.area);
        safeSet('software-label', p.software);
    }

    document.documentElement.lang = lang;
}

// Ao carregar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // Idioma salvo
    let saved = null;
    try { saved = localStorage.getItem('siteLang'); } catch (e) {}
    if (saved && translations[saved]) setLanguage(saved);

    // Bandeiras
    const flags = document.querySelectorAll('.lang-switch img');
    flags.forEach(img => {
        img.addEventListener('click', () => {
            const dataLang = img.getAttribute('data-lang');
            if (dataLang && translations[dataLang]) {
                setLanguage(dataLang);
            }
        });
    });
});

// LIGHTBOX
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    const prevBtn = document.querySelector(".lightbox .prev");
    const nextBtn = document.querySelector(".lightbox .next");

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = "block";
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "block") {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        }
    });
});
