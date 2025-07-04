export class Boletim {
    provaFinal: number = 0;
    media!: number;
    mediaFinal: number | null = null;
    mensagem: string = '';
    mensagemFinal: string = '';
    aprovado: boolean = false;
    precisaProvaFinal: boolean = false;
    calculoRealizado: boolean = false;

    constructor() {}

    calcularMedia(n1: number, n2: number, n3: number, n4: number): void {
        this.media = (n1 * 2 + n2 * 2 + n3 * 3 + n4 * 3) / 10;
        this.mediaFinal = null;
        this.calculoRealizado = true;
        if (this.media >= 60) {
            this.mensagem = 'Parabéns! Você está aprovado. :D';
            this.aprovado = true;
            this.precisaProvaFinal = false;
        } else if (this.media >= 10) {
            this.mensagem = 'Que pena, você está em prova final. :c'
            this.aprovado = false;
            this.precisaProvaFinal = true;
        } else {
            this.mensagem = 'Infelizmente você está reprovado. :c'
            this.aprovado = false;
            this.precisaProvaFinal = false;
        }
    }

    calcularMediaFinal(n1: number, n2: number, n3: number, n4: number, provaFinal: number){
        const menorNota = Math.min(n1,n2,n3,n4);
        if (n1 === menorNota) n1 = provaFinal;
        else if (n2 === menorNota) n2 = provaFinal;
        else if (n3 === menorNota) n3 = provaFinal;
        else n4 = provaFinal;

        this.mediaFinal = (n1 * 2 + n2 * 2 + n3 * 3 + n4 * 3) / 10;
        this.aprovado = this.mediaFinal >= 60;
        this.mensagemFinal = this.aprovado 
        ? 'Parabéns! Você foi aprovado na prova final! :D' 
        : 'Infelizmente você não atingiu a média final. :c';
  }
}
