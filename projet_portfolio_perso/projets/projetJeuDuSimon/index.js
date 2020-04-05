const vm = new Vue ({
    el: "#app",
    data: {
        hautGauche: false,
        hautDroite: false,
        basGauche: false,
        basDroite: false,
        sequence: [],
        squareMapping: ['hautGauche', 'hautDroite', 'basGauche', 'basDroite'],
        tmp: []
    },
    computed: {
        score() {
            const value = this.sequence.length - 1;
            return (value < 0) ? `Score : 0` : `Score : ${ value }`;
        }
    },
    methods: {
        addNewElemToSequence() {
            this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4 )]);
            this.tmp = this.sequence.slice();
        },
        allGrey() {
            this.hautGauche = false;
            this.hautDroite = false;
            this.basGauche = false;
            this.basDroite = false;
        },
        newGame() {
            this.sequence = [];
            this.nextTurn();
            // setTimeout(function(){
            //     vm.allGrey();
            // }, 300);
        },
        nextTurn() {
            this.addNewElemToSequence();
            this.allGrey();
            this.playSequence(this.tmp[0]);
        },
        playSequence(instruction) {
            this[instruction] = true;
            setTimeout(function(){
                vm.allGrey();
                vm.tmp.shift();
                if (vm.tmp[0]) {
                    setTimeout(() => {
                        vm.playSequence(vm.tmp[0]);
                    }, 400);
                } else {
                    vm.tmp = vm.sequence.slice();
                }
            }, 400);
        },
        selectSquare(instruction) {
            console.log(instruction);
            if (instruction === this.tmp[0]) {
                this[instruction] = true;
                setTimeout(function() {
                    vm.allGrey();
                    vm.tmp.shift();
                    if (!vm.tmp[0]) {
                        vm.nextTurn();
                    }
                }, 400);
            } else {
                alert('perdu');
            }
        }
    }

});
