export default {
    template: `
        <li class="p-2">
            <label class="flex justify-between items-center">
                {{ assignment.name }} 
            
                <input type="checkbox" v-model="assignment.completed" class="ml-4">
            </label>
        </li>   
    `,

    props: {
        assignment: Object
    }
}