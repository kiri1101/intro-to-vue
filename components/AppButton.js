export default {
    template: `
        <button 
            :class="{
                'rounded-lg px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-400': type === 'primary',
                'bg-cyan-600 hover:bg-cyan-400': type === 'secondary',
                'bg-amber-600 hover:bg-amber-400': type === 'warning',
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,

    props:{
        type: {
            typeof: String,
            default: 'primary'
        },
        
        // processing: {
        //     type: Boolean,
        //     default: true
        // }
    },

    data() {
        return {
            processing: true
        }
    },
}