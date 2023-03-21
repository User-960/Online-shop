declare module '*.vue'{
    import type {ComponentOptions} from 'vue';
    const component: ComponentOptions;
    export default component;
}

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}
