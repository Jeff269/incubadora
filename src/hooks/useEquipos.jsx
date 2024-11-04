import { getEquipos } from '../services/equipoService'

export default function useEquipos () {
  const equipos = getEquipos()

  console.log(equipos)

  const mappedEquipos = equipos?.map(equipo => ({
    equipo: equipo.equipo,
    integrantes: equipo.integrantes
  }))
  return { equipos: mappedEquipos }
}
