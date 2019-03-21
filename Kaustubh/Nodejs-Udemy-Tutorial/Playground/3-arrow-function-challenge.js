//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script


/**
 * I've completed appx 90% (with least optimized way i.e first way) code, but I don't know that it was required to double return the value,
 * By not double returning, I was getting result as undefined
 */

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo()
    {
        /**
         * This is first way to do
         * var getTasks=this.tasks.filter((task)=>
        {
            return task.completed===false
        })
        return getTasks;
         */             
        /**
         * This is second way, which is more optimized
         * return getTasks=this.tasks.filter((task)=>
         {
             return task.completed===false
         })
         The above is my way which works (actually by my mistake ;)  )
         
         It is more optimized, which is shown in course
         return this.tasks.filter((task)=>
         {
             return task.completed===false
         })
         */
        
         //The most optimized way (which I liked by the way)

         return this.tasks.filter((task)=>task.completed===false)
    }
}
console.log(tasks.getTasksToDo())