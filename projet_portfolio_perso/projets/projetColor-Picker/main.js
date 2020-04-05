new Vue({
        el:'#app',
        data: {
            green: 0,
            blue: 0,
            red: 0,
            squares : [],
            selectedSquare: ''


        },
        methods: {
            resetColor() {
                this.green = 0 ;
                this.blue = 0 ;
                this.red = 0 ;
            },
            saveSquare() {
                this.squares.push(`rgb(${ this.red }, ${ this.green }, ${ this.blue } )`);
                console.log(this.squares);
                this.resetColor();
            },
            reset() {
                this.squares = [];
                this.resetColor();
            },

        },
        computed: {
            nbrOfSquares() {
                return this.squares.length;
            }
        }
    });
