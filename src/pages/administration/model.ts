export class Employee {
  public id?: number
  public firstName = ''
  public lastName = ''
  public email = ''
  public rola = ''

  public getName() {
    return `${this.firstName}  ${this.lastName}`
  }
}