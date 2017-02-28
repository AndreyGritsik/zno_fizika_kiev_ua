export class TestEntity {
  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
  private _name : String;
}
