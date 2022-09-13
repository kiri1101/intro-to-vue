export default {
    template: `
    <form @submit.prevent="add">
        <div class="text-black mt-5 flex">
            <input v-model='newAssignment' placeholder="New assignment..." class="p-2 w-48"\>

            <button type="submit" class="bg-white p-2 border-l border-gray-600">Add</button>
        </div>
    </form>
    `,

    data() {
        return {          
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('a', this.newAssignment)     
            this.newAssignment = ''
        }
    },

}