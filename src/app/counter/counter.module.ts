import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
// import { ListComponent } from './components/list/list.component';

@NgModule({
    declarations: [
        CounterComponent,
        // ListComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule{
    
}