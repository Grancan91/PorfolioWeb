<script setup>
import Icon from './Icon.vue';
import SkillBadge from './SkillBadge.vue';

const projects = [
  {
    name: "Galaga",
    description: "Demo del Galaga para poner en practica el manejo de HTML, CSS y JavaScrpt",
    img: "./projects/Galaga-Demo.webp",
    stack: [
      {
        name: "HTML",
        icon: "IconHtml"
      },
      {
        name: "CSS",
        icon: "IconCss"
      },
      {
        name: "JavaScript",
        icon: "IconJavaScript"
      }
    ]
  },
  {
    name: "Feel Front & Backend",
    description: 'Feel es una aplicación para el seguimiento del estado emocional del paciente, el cual tendrá asignado un profesional de la salud mental, que tendra acceso a los reportes generados por la app para poder mejorar la atención del paciente.',
    img: "./projects/Feel-Home.webp",
    stack: [
      {
        name: "HTML",
        icon: "IconHtml"
      }, {
        name: "CSS",
        icon: "IconCss"
      }, {
        name: "JavaScript",
        icon: "IconJavaScript"
      }
      , {
        name: "React",
        icon: "IconReact"
      }, {
        name: "Tailwind CSS",
        icon: "IconTailwind"
      }, {
        name: "Node.JS",
        icon: "IconNode"
      }, {
        name: "Express JS",
        icon: "IconExpress"
      }, {
        name: "Mongo DB",
        icon: "IconMongo"
      }, {
        name: "Mongoose",
        icon: "IconMongoose"
      }
    ]
  },
  {
    name: "Appsadero Frontend",
    description: `Appsadero es una aplicación creada en equipo para gestionar todo lo relacionado con un Asadero, en este MVP el foco esta en la gestion de Invitaciones y confirmación de asistencia`,
    img: "./projects/Appsadero-Front.webp",
    github: "https://github.com/Adasat/Appsadero-Frontend",
    stack: [
      {
        name: "HTML",
        icon: "IconHtml"
      }, {
        name: "CSS",
        icon: "IconCss"
      }, {
        name: "JavaScript",
        icon: "IconJavaScript"
      }
      , {
        name: "React",
        icon: "IconReact"
      }, {
        name: "Material UI",
        icon: "IconMui"
      }
    ]
  },
  {
    name: "Appsadero Backend",
    description: `Appsadero es una aplicación creada en equipo para gestionar todo lo relacionado con un Asadero, en este MVP el foco esta en la gestion de Invitaciones y confirmación de asistencia`,
    img: "./projects/Appsadero-Back.webp",
    github: "https://github.com/Adasat/Appsadero-Frontend",
    stack: [
      {
        name: "JavaScript",
        icon: "IconJavaScript"
      }, {
        name: "Node.JS",
        icon: "IconNode"
      }, {
        name: "Express JS",
        icon: "IconExpress"
      }, {
        name: "MYSQL",
        icon: "IconMysql"
      }, {
        name: "Sequelize",
        icon: "IconSequelize"
      }
    ]
  }
]
</script>

<template>
  <section id="projects" class="px-[18px] md:px-[100px] lg:px-[100px] xl:px-[250px]">
    <h2 class="text-3xl">Proyectos</h2>

    <div v-for="project in projects" class="flex flex-col py-4 sm:flex-row">
      <img :src="project.img" alt="" class="max-w-[500px] rounded-2xl z-10">
      <div class=" sm:ml-4">
        <h2 class="py-2 sm:pl-6 text-2xl">{{ project.name }}</h2>
        <p class="!text-[16px] sm:pl-6 sm:mt-4">{{ project.description }}
        </p>
        <div class="flex flex-wrap gap-4 sm:pl-6 mt-4">
          <SkillBadge v-for="skill in project.stack" :key="skill.name" :name="skill.name" :icon="skill.icon" />
        </div>
      </div>
    </div>
  </section>
</template>
