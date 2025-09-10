import { UnavailableIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router";
import { editProductStatus } from "../api/EditProductStatus";
import { getProductByID } from "../api/GetProductByID";



export function ButtonCancelled() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductByID(id!),
  });

  const mutation = useMutation({
    mutationFn: () => {
      if (data?.product.status !== 'cancelled') {
        return editProductStatus(id!, 'cancelled');
      } if (data?.product.status === 'cancelled') {
        return editProductStatus(id!, 'available');
      }
    },
    onSuccess: () => {
      navigate(0);
    }
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      className="flex items-center gap-2 text-orange-base action-sm cursor-pointer"
      disabled={mutation.isPending}
    >
      <HugeiconsIcon icon={UnavailableIcon} size={20} />{data?.product.status === 'cancelled' ? 'Ativar anúncio' : 'Desativar anúncio'}
    </button>
  );
}
