import Vue from 'vue';

const components = {
    // 'component-name': () => '@/components/componentName',
};

Object.entries(components).forEach(([name, component]) => Vue.component(name, component));