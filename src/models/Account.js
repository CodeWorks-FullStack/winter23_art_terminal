export class Profile {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.graduated = data.graduated
    this.coverImg = data.coverImg
    this.github = data.github
  }

}
export class Account extends Profile {
  constructor (data) {
    super(data)
    this.email = data.email
  }
}
