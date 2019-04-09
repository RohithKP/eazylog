import { async, TestBed } from '@angular/core/testing';
import { PlaceAutocompleteComponent } from './place-autocomplete.component';
describe('PlaceAutocompleteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PlaceAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PlaceAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=place-autocomplete.component.spec.js.map