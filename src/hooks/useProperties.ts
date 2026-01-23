import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { propertyService } from '@/api/services/property.service';
import { Property, PropertyFilters, CreatePropertyDTO, UpdatePropertyDTO, PaginatedResponse } from '@/types/property';

// Get all properties with filters (paginated)
export const useProperties = (filters?: PropertyFilters) => {
  return useQuery<PaginatedResponse<Property>, Error>({
    queryKey: ['properties', filters],
    queryFn: () => propertyService.getAll(filters),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Get property by ID
export const useProperty = (id: string) => {
  return useQuery<Property, Error>({
    queryKey: ['property', id],
    queryFn: () => propertyService.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// Create new property
export const useCreateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, CreatePropertyDTO>({
    mutationFn: (propertyData: CreatePropertyDTO) => 
      propertyService.create(propertyData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
};

// Update property
export const useUpdateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, { id: string; data: UpdatePropertyDTO }>({
    mutationFn: ({ id, data }) =>
      propertyService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      queryClient.invalidateQueries({ queryKey: ['property', variables.id] });
    },
  });
};

// Delete property
export const useDeleteProperty = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => propertyService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
};

// Toggle favorite status
export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, string>({
    mutationFn: (id: string) => propertyService.toggleFavorite(id),
    onSuccess: (updatedProperty) => {
      queryClient.setQueryData(['property', updatedProperty.id], updatedProperty);
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
};

// Get similar properties
export const useSimilarProperties = (id: string, limit: number = 4) => {
  return useQuery<Property[], Error>({
    queryKey: ['similarProperties', id],
    queryFn: () => propertyService.getSimilar(id, limit),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// Get properties by type
export const usePropertiesByType = (type: string) => {
  return useQuery<Property[], Error>({
    queryKey: ['properties', 'type', type],
    queryFn: () => propertyService.getAll({ type }).then(res => res.data),
    enabled: !!type,
    staleTime: 5 * 60 * 1000,
  });
};

// Get featured properties
export const useFeaturedProperties = () => {
  return useQuery<Property[], Error>({
    queryKey: ['properties', 'featured'],
    queryFn: () => propertyService.getFeatured(),
    staleTime: 5 * 60 * 1000,
  });
};

// Search properties
export const useSearchProperties = (query: string, filters?: PropertyFilters) => {
  return useQuery<Property[], Error>({
    queryKey: ['properties', 'search', query, filters],
    queryFn: () => propertyService.search(query, filters),
    enabled: !!query,
    staleTime: 5 * 60 * 1000,
  });
};

// Don't use export * from './useProperties' at the end of the same file
// This causes circular dependency