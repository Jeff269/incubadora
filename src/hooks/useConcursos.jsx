import { getConcursos } from '../services/concursoService'

export default function useConcurso () {
  const concursos = getConcursos()
  const mappedConcursos = concursos?.map(concurso => ({
    nombre: concurso.nombre,
    fecha_inicio: concurso.fecha_inicio,
    fecha_fin: concurso.fecha_fin,
    estado: concurso.estado,
    descripcion: concurso.descripcion,
    participantes: concurso.participantes,
    ganador: concurso.ganador
  }))
  return { concursos: mappedConcursos }
}
