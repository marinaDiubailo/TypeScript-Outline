/**обертка, которая позволяет инкапсулировать в себя какую-то логику
 * используется чаще на бэке
 */

// module = namespace

namespace Aa {
  export const a = 5;

  export interface B {
    c: number;
  }
}

Aa.a;
