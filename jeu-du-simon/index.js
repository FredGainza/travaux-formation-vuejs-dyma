const vm = new Vue({
    el:'#app',
    data: {
        hautGauche: false,
        hautDroite: false,
        basDroite: false,
        basGauche: false,
        sequence: [],
        tmp: [],
        score: 0,
    	scorePrecedent: 0,
    	scoreMeilleur: 0,
        squareMapping: ['hautGauche', 'hautDroite', 'basDroite', 'basGauche']
    },
    methods: {
        incrementScore() {
            this.score++;
            return this.score;
        },
        addNewElemToSequence() {
            this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
            this.tmp = this.sequence.slice();
        },
        allGray() {
            this.hautGauche = false;
            this.hautDroite = false;
            this.basDroite = false;
            this.basGauche = false;
        },
        selectSquare(instruction){
            if (instruction === this.tmp[0]) {
                play_multi_sound(`audio-${instruction}`);
            	vm[instruction]=true;
                setTimeout(function(){
                    vm.allGray();
                    vm.tmp.shift();
                    vm.incrementScore();
                    if (!vm.tmp[0]) {
                        vm.nextTurn();
                    }
                }, 400);
            } else {
            	play_multi_sound(`audio-error`);
                alert ('Perdu');
                vm.endGame();
            }
            
        },
        playSequence(instruction){
            setTimeout(function(){
            	play_multi_sound(`audio-${instruction}`);
            	vm[instruction]=true;
                setTimeout(function(){
                    vm.allGray();
                    vm.tmp.shift();
                    if (vm.tmp[0]){
                            vm.playSequence(vm.tmp[0]);                        
                    } else {
                        vm.tmp = vm.sequence.slice();
                    }
                }, 400);
            }, 400);
        },
        nextTurn() {
            setTimeout(function(){
                vm.addNewElemToSequence();
                vm.allGray();
                vm.playSequence(vm.tmp[0]);
            }, 400);

        },
    	endGame() {
        	this.sequence = [];
        	this.scorePrecedent = this.score;
        	if (this.scorePrecedent > this.scoreMeilleur) {
            	this.scoreMeilleur = this.scorePrecedent;
            }
        	this.score = 0;
        },
        newGame() {
            this.sequence = [];
            this.nextTurn();
            this.score = 0;
            // setTimeout(function(){
            //     vm.allGray();
            // }, 300);
        }
    },
    computed: {

    },
    watch: {

    }
});