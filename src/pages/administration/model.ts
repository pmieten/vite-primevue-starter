export class Employee {
  public firstName: string
  public lastName: string
  public email: string
  public rola: string
 
  public getName() {
    return `${this.firstName}  ${this.lastName}`
  }
}