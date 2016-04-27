import {Component,Output,Input,EventEmitter} from "angular2/core";
import {NgForm}    from 'angular2/common';

@Component({
	selector: "date-picker-view",
	templateUrl: "app/graphs/date_picker_view/date_picker_view.html",
	styleUrls: ["app/graphs/date_picker_view/date_picker_view.css"]
})
export class DatePickerView 
{
	public @Output() onPick: EventEmitter<any> = new EventEmitter();
	public @Input() resolution:string;
	
	from:string = "";
	to:string = "";
	
	resolutions:object = 
	[
		{
			"name": "År",
			"value": "YEAR"
		},
		{
			"name": "Kvartal",
			"value": "QUARTER"
		},
		{
			"name": "Månad",
			"value": "MONTH"
		},
		{
			"name": "Vecka",
			"value": "WEEK"
		},
		{
			"name": "Dag",
			"value": "DAY"
		}
	];
	
	clicking()
	{
		this.onPick.emit(this.resolution);
	}
}