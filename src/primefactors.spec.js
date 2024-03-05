describe("Determinar el factor primo", () => {
    it("Si ingreso 1, me retorna una lista vacia", () => {
        let primeFactors = new PrimeFactors();
        expect(primeFactors.generate(1)).toEqual([]);
    });
    it("Si ingreso 2, me retorna una lista con el numero 2", () => {
        let primeFactors = new PrimeFactors();
        expect(primeFactors.generate(2)).toEqual([2]);
    });
    it("Si ingreso 2, me retorna una lista con 2", () => {
        let primeFactors = new PrimeFactors();
        expect(primeFactors.generate(2)).toEqual([2]);
    });
    it("Si ingreso 3, me retorna una lista con 3", () => {
        let primeFactors = new PrimeFactors();
        expect(primeFactors.generate(3)).toEqual([3]);
    });
    it("Si ingreso 4, me retorna sus factores", () => {
        let primeFactors = new PrimeFactors();
        expect(primeFactors.generate(4)).toEqual([2,2]);
    });
});

class PrimeFactors{
    generate(n){
        let primes = [];
        if(n>1){
            if(n%2 == 0){
                primes.push(2);
                n/=2;
            }
            if(n>1)
                primes.push(n);
        }
        return primes;
    }
}