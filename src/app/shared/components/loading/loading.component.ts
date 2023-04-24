import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from "@angular/core";
import { ProgressBarMode } from "@angular/material/progress-bar";
import { LoadingService } from "../../services/loading.service";



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  /* encapsulation: ViewEncapsulation.None */
})
export class LoadingComponent implements OnInit, AfterViewChecked {
  @Input() type: string = "progress" || "spinner";
  @Input() mode: ProgressBarMode = "indeterminate";

  constructor(
    public loadingService: LoadingService,
    public cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}