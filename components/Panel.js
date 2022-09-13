export default {
    template: `
        <div 
            :class="{
                'p-2 border border-gray-600 rounded-lg min-w-min': true,
                'bg-gray-200 text-gray-600': theme === 'light',
                'bg-gray-700 text-white': theme === 'dark'
            }"
        >
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer" class="border-t p-2 mt-3 border-gray-500">
                <slot name="footer" />
            </footer>
        </div>    
    `,

    props: {
        heading: String,
        theme: { type: String, default: 'dark' }
    }
}