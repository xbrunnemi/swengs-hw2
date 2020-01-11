import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  rankNames = {
    Rekr: 'Rekrut',
    Gfr: 'Gefreiter',
    Kpl: 'Korporal',
    Zgf:'Zugsfuehrer',
    Wm: 'Wachtmeister',
    OWm: 'Oberwachtmeister',
    StWm: 'Stabswachtmeister',
    OStWm: 'Oberstabswachtmeister',
    OStv: 'Offizierstellvertreter',
    Vzlt: 'Vizeleutnant',
    Fhr: 'Faehnrich',
    Lt: 'Leutnant',
    Olt: 'Oberleutnant',
    Hptmn: 'Hauptmann',
    Mjr: 'Major',
    Obstlt: 'Oberstleutnant',
    Obst: 'Oberst',
    Bgdr: 'Brigadier',
    GenMjr: 'Generalmajor',
    GenLt: 'Generalleutnant',
    Gen: 'General'
  };
  constructor() { }
}
