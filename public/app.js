new Vue({
	el:'#events',
	data: {
		event: {
			name: '',
			description: '',
			date: ''
		},
		events:[]
	},
	mounted: function() {
		this.fetchEvents();
	},
	methods: {
		fetchEvents: function(){
			var events = [
				{id: 1,
				 name:'TIFF',
				 description:'Toronto International Film Fest',
				 date:'2015-09-30'},
				{id: 2,
				 name:'The Martian Premier',
				 description:'The martion comes to theatres...',
				 date:'2016-10-01'},
				{id: 3,
				 name:'SXSW',
				 description:'Music, film and interactive fest in Texas',
				 date:''}

			];
			console.log(events);
			this.events = events;
		},
		addEvent: function(){
			console.log('In addEvent');

			if(this.event.name){
				this.events.push(this.event);
				console.log(this.events);
				this.event = {name:'', description:"",date:""};
			}
		},
		deleteEvent: function(index){
			if(confirm("Are you sure you wanna do that?")){
				this.events.splice(index,1);
			}
		}
	}
});
