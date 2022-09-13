import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';


export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-4 text-white">
            <assignment-list 
                :assignments="filters.InProgress" 
                title="In Progress" 
                class="w-64"
            >
                <assignment-create @a="add" class="w-60"></assignment-create>
            </assignment-list>

            <div v-show="showList">
                <assignment-list                  
                    :assignments="filters.Completed" title="Completed" 
                    can-toggle
                    @toggle="showList = !showList"
                >
                </assignment-list>             
            </div>
        </section> 
    `,

    data() {
        return {
            assignments: [],
            showList: true
        }
    },

    computed: {
        filters() {
            return {
                InProgress: this.assignments.filter(a => ! a.completed),
                Completed: this.assignments.filter(a => a.completed)
            }
        }
    },

    created() {
        fetch('http://localhost:3000/assignments').then(response => response.json()).then(assignments => {
            this.assignments = assignments
        })
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: ++this.assignments.length
            })
        }
    },

}