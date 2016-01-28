/// <reference path="../references.d.ts" />
import observable = require("data/observable");

export class MainViewModel extends observable.Observable {

	labelText = "text";

	onTap() {
		this.set("labelText", Math.random());
	}
}