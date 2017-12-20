import { Component, Input } from '@angular/core';
import { Wisata } from '../../models/wisata.interface';
/**
 * Generated class for the TempatWisataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tempat-wisata',
  templateUrl: 'tempat-wisata.html'
})
export class TempatWisataComponent {

  @Input() wisata: Wisata;

}
