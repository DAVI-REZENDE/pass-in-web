import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border w-72 border-white/10 rounded-lg text-sm  flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-2.5 text-sm font-semibold text-left">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold text-left">
                Data do check-in
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3 px-2.5 text-sm">
                <input type="checkbox" />
              </td>
              <td className="py-3 px-2.5 text-sm">12353</td>
              <td className="py-3 px-2.5 text-sm">
                <div>
                  <span>Davi Rezende</span>
                  <span>davirezendeps@gmail.com</span>
                </div>
              </td>
              <td className="py-3 px-2.5 text-sm">7 dias atras</td>
              <td className="py-3 px-2.5 text-sm">3 dias atras</td>
              <td className="py-3 px-2.5 text-sm"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Mostrando 10 de 239 itens</td>
              <td colSpan={3}>Pagina 1 de 23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
