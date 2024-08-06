import { Game } from '@/types/games'

const games: Game[] = [
  {
    history:
      'En una mansión antigua, cuatro amigos se reunieron para una cena que prometía ser encantadora. Mientras disfrutaban de su comida en el comedor, las luces parpadearon repentinamente y el majestuoso candelabro se cayó, matando al anfitrión, el Sr. Thompson. La policía llegó y encontró a los cuatro presentes: la encantadora Sra. Hall, el reservado Sr. Green, la enérgica Sra. Black y el tímido Sr. White. Cada uno tenía un motivo y una coartada, pero al revisar las cámaras de seguridad, la policía descubrió que solo uno había tenido acceso al sistema de electricidad de la mansión.',
    solution:
      'El Sr. White es el impostor porque, a diferencia de los demás, tenía acceso al sistema de electricidad de la mansión, lo cual le permitió manipular las luces y causar el accidente que llevó a la muerte del Sr. Thompson.',
    characters: 'la Sra. Hall, el Sr. Green, la Sra. Black y el Sr. White',
    impostor_character: 'el Sr. White',
    language: 'es',
  },
  {
    history:
      'En la mansión de los Lancaster, cuatro amigos se reunieron para celebrar el cumpleaños de Gerald, el anfitrión. La noche avanzaba entre risas y anécdotas, cuando de repente se escuchó un grito en la biblioteca. Al llegar, encontraron a la sirvienta fallecida con una carta en su mano. Gerald, alarmado, pidió a sus amigos que revisaran el lugar para encontrar al culpable. Cecilia estaba en la sala de billar, Ana estaba en la cocina preparando más bocadillos y Jorge estaba en el vestíbulo revisando el teléfono. A medida que investigaban, se dieron cuenta de que el culpable estaba oculto a plena vista, moviendo piezas sin ser visto.',
    solution:
      'Cecilia fue la culpable porque, mientras los otros personajes estaban en sus respectivas ubicaciones, solo ella tenía la oportunidad de estar en la biblioteca al momento del grito. La carta en la mano de la sirvienta contenía una nota escrita con el mismo tipo de bolígrafo que Cecilia usaba para anotar recetas en la cocina, lo que indicaba que ella había tenido contacto directo con el documento y, por lo tanto, era la responsable del crimen.',
    characters: 'Gerald, Cecilia, Ana, Jorge',
    impostor_character: 'Cecilia',
    language: 'es',
  },
  {
    history:
      'En una elegante mansión, los cuatro invitados, el profesor Blackwood, la señora Whitfield, el coronel Greene y la señorita Blue, estaban reunidos para una cena formal. Mientras la conversación fluía y los platos se servían, la señora Whitfield se levantó para dirigirse al jardín y encontró un sombrero de copa ensangrentado cerca del invernadero. Alarmada, volvió a la sala principal y alertó a los demás. El coronel Greene, que siempre estaba pendiente de los detalles, sugirió revisar el área. Sin embargo, cuando abrieron el despacho del profesor Blackwood, descubrieron que había una nota escrita con tinta roja que parecía una amenaza. El profesor insistió en que la nota era un malentendido y que no debía preocupar a nadie, mientras la señorita Blue parecía nerviosa y no dejaba de mirar el reloj. Finalmente, se descubrió que el sombrero de copa pertenecía al propio profesor, pero no había rastro de sangre en él, solo en el suelo del invernadero.',
    solution:
      'La señorita Blue es el impostor porque su comportamiento nervioso y su insistencia en no dejar de mirar el reloj sugieren que estaba escondiendo algo. Además, el hecho de que el sombrero de copa, que fue encontrado en el invernadero cerca del lugar donde estaba la sangre, perteneciera al profesor, y no a otro invitado, sugiere que el intento de distraer a los otros y el pánico eran parte de su plan.',
    characters:
      'profesor Blackwood, señora Whitfield, coronel Greene, señorita Blue.',
    impostor_character: 'señorita Blue.',
    language: 'es',
  },
  {
    history:
      'On a stormy night at the grand Blackwood Manor, four guests gathered for a dinner party: Professor Plum, Miss Scarlet, Colonel Mustard, and Mrs. Peacock. As the clock struck midnight, a scream echoed through the mansion. The guests rushed to the library, where they found the lifeless body of the butler, Mr. Green, lying on the floor, a candlestick beside him. The guests each claimed innocence. Professor Plum said he was in the study, lost in a book. Miss Scarlet insisted she was in the conservatory, tending to the flowers. Colonel Mustard stated he was in the kitchen, getting a late-night snack. Mrs. Peacock claimed she was in the ballroom, practicing the piano. The evidence, however, pointed to one of them as the impostor.',
    solution:
      "The impostor is Colonel Mustard. The key detail is the candlestick found beside the body. Colonel Mustard claimed he was in the kitchen, but if he were truly in the kitchen, he would have used a knife or some other kitchen utensil. The candlestick, a common object in the library, indicates that the impostor must have been in or near the library, not the kitchen. Therefore, Colonel Mustard's alibi doesn't hold up, making him the likely culprit.",
    characters: 'Professor Plum, Miss Scarlet, Colonel Mustard, Mrs. Peacock.',
    impostor_character: 'Colonel Mustard.',
    language: 'en',
  },
  {
    history:
      "The night was shrouded in mystery as the four guests gathered in the grand manor's library for an evening of games. The storm outside raged, sealing them in with an ominous air. Dr. Violet, a renowned chemist, had organized the event, inviting her three closest friends: Colonel Green, an ex-military officer; Ms. Scarlet, a famous actress; and Professor Plum, a distinguished historian. As the clock struck midnight, a scream pierced the air. The group rushed to the study to find Dr. Violet lying lifeless on the floor, a vial of poison clutched in her hand. Suspicion fell on each of the remaining guests, who all claimed to have alibis. Colonel Green had been polishing his medals in the trophy room, Ms. Scarlet was rehearsing her lines in the parlor, and Professor Plum was engrossed in an ancient manuscript in the library. Yet, the evidence suggested an inside job, and the group quickly realized one of them was lying. They debated furiously, each trying to prove their innocence while subtly pointing fingers at the others.",
    solution:
      'Professor Plum is the impostor because he claimed to have been in the library, yet the story specifies that the guests gathered in the library at the start and later rushed to the study, which means Plum had the opportunity to tamper with the poison while the others were in different rooms.',
    characters: 'Colonel Green, Ms. Scarlet, Dr. Violet, Professor Plum.',
    impostor_character: 'Professor Plum.',
    language: 'en',
  },
]

export default games
